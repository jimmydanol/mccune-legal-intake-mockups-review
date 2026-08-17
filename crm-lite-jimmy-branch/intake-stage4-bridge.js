(function (root, factory) {
  const readiness =
    (root && root.BKFLStage4Readiness) ||
    (typeof require === 'function' ? require('./stage4-readiness.js') : null)
  const api = factory(readiness)
  if (typeof module === 'object' && module.exports) module.exports = api
  if (root) root.BKFLIntakeStage4Bridge = api
})(typeof globalThis !== 'undefined' ? globalThis : this, function (readiness) {
  'use strict'

  if (!readiness) throw new Error('BK FastLane Stage 4 readiness engine is required.')

  const list = (value) => (Array.isArray(value) ? value : [])
  const text = (value) => String(value ?? '').trim()
  const lower = (value) => text(value).toLowerCase()
  const slug = (value) =>
    text(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'fake-debtor'

  function debtorFor(sourcePackage) {
    return sourcePackage?.matter?.debtors?.[0] || sourcePackage?.debtor || {}
  }

  function canonicalDocumentStatus(document) {
    const firmDecision = lower(document?.firmDecision?.status || document?.reviewDecision?.status)
    if (firmDecision === 'approved') return 'approved'
    if (firmDecision === 'excused') return 'excused'
    if (firmDecision === 'rejected') return 'open'
    if (lower(document?.status) === 'reviewed') return 'approved'
    if (lower(document?.status) === 'received') {
      return document?.qualityIssue ? 'ai_flagged' : 'ai_accepted'
    }
    return 'open'
  }

  function evidenceFilesFor(document) {
    const entries = list(document?.files).length
      ? list(document.files)
      : list(document?.evidenceFiles).length
        ? list(document.evidenceFiles)
        : text(document?.fileName)
          ? [
              {
                mimeType: document.mimeType,
                name: document.fileName,
                qualityIssue: document.qualityIssue,
              },
            ]
          : []
    const files = readiness.flattenEvidenceEntries
      ? readiness.flattenEvidenceEntries(entries)
      : entries
    return files.map((file, index) => ({
      accuracyStatus: file.accuracyStatus || file.reviewStatus || 'needs_review',
      id: file.id || `${text(document?.id || document?.name)}-file-${index + 1}`,
      mimeType: file.mimeType || file.type || file.mime_type || '',
      name: file.name || file.fileName || file.title || `Evidence ${index + 1}`,
      previewUrl: file.previewUrl || file.url || '',
      qualityIssue: file.qualityIssue || document?.qualityIssue,
      relativePath: file.relativePath || file.webkitRelativePath || '',
      sha256: file.sha256 || '',
      size: Number(file.size || file.bytes || 0),
      source: file.source || 'intake_upload',
      sourceTemplate: file.sourceTemplate || '',
      sourceUrl: file.sourceUrl || '',
      traversalIssue: file.traversalIssue || '',
      url: file.url || file.previewUrl || '',
    }))
  }

  function completionDocuments(sourcePackage) {
    return list(sourcePackage?.completion?.bundle?.items).filter(
      (item) => lower(item?.kind) === 'document',
    )
  }

  function evidenceFingerprint(files) {
    return list(files)
      .map((file) =>
        [
          text(file?.sha256),
          text(file?.relativePath),
          text(file?.name || file?.fileName || file?.title),
          Number(file?.size || 0),
        ].join(':'),
      )
      .sort()
      .join('|')
  }

  function buildDocumentChecklist(sourcePackage, existingLead) {
    const existingById = new Map(
      list(existingLead?.docChecklist).map((document) => [text(document.docId || document.id), document]),
    )
    const documents = list(sourcePackage?.matter?.documents).map((document, index) => {
      const docId = text(document.id || document.docId || slug(document.name) || index + 1)
      const existing = existingById.get(docId)
      const importedStatus = canonicalDocumentStatus(document)
      const importedFiles = evidenceFilesFor(document)
      const evidenceUnchanged =
        !!existing && evidenceFingerprint(existing.files) === evidenceFingerprint(importedFiles)
      const firmStatus = evidenceUnchanged && ['approved', 'excused'].includes(lower(existing?.status))
        ? existing.status
        : importedStatus
      return {
        ...existing,
        applicability: document.applicability || 'essential_now',
        applicabilityReason: document.applicabilityReason || '',
        customName: document.customName || document.name || existing?.customName || '',
        docId,
        files: importedFiles,
        id: existing?.id || docId,
        name: document.name || existing?.name || `Document ${index + 1}`,
        overrideReason: evidenceUnchanged ? existing?.overrideReason : undefined,
        qualityIssue: document.qualityIssue,
        status: firmStatus,
      }
    })

    const known = new Set(documents.map((document) => document.docId))
    completionDocuments(sourcePackage).forEach((item, index) => {
      const docId = text(item.documentId || item.id || `completion-document-${index + 1}`)
      if (known.has(docId)) return
      documents.push({
        applicability: item.applicability || 'essential_now',
        docId,
        files: [],
        id: docId,
        name: item.label || 'Required Document',
        status: 'open',
      })
    })
    return documents
  }

  function buildDataReview(sourcePackage, existingLead, options) {
    const completion = sourcePackage?.completion || {}
    const missingFields = list(completion.missingItems).filter(
      (item) => lower(item?.kind) === 'field' && !['closed', 'resolved', 'verified', 'waived'].includes(lower(item?.resolutionStatus)),
    )
    const discrepancies = list(
      sourcePackage?.inconsistencies || sourcePackage?.dataDiscrepancies || sourcePackage?.matter?.dataDiscrepancies,
    )
    return {
      accuracyStatus:
        options.dataAccuracyStatus ||
        existingLead?.dataReview?.accuracyStatus ||
        completion?.states?.dataAccuracy ||
        'needs_review',
      completenessStatus: missingFields.length === 0 && lower(completion.status) === 'complete'
        ? 'complete'
        : completion.status || 'needs_client_action',
      discrepancies,
      missingFields,
      sourceRevision: completion.revision || sourcePackage?.revision || 1,
    }
  }

  function importIntakePackage(sourcePackage, existingLead = null, options = {}) {
    const debtor = debtorFor(sourcePackage)
    const packageId = text(sourcePackage?.packageId || sourcePackage?.id || `fake-${slug(`${debtor.firstName}-${debtor.lastName}`)}`)
    const importedAt = options.importedAt || new Date().toISOString()
    const attorneyStatus =
      options.attorneyReviewStatus ||
      existingLead?.attorneyReview?.status ||
      sourcePackage?.completion?.states?.attorneyReview ||
      'not_started'
    const next = {
      ...(existingLead || {}),
      attorneyReview: {
        ...(existingLead?.attorneyReview || {}),
        flags: list(sourcePackage?.reviewFlags),
        status: attorneyStatus,
      },
      bankruptcyType: String(sourcePackage?.matter?.chapter || '').includes('13') ? 'Chapter 13' : 'Chapter 7',
      dataReview: buildDataReview(sourcePackage, existingLead, options),
      docChecklist: buildDocumentChecklist(sourcePackage, existingLead),
      email: debtor.email || existingLead?.email || '',
      firstName: debtor.firstName || existingLead?.firstName || '',
      id: existingLead?.id || `intake-${packageId}`,
      intakeCompletion: sourcePackage?.completion || existingLead?.intakeCompletion || null,
      intakePackage: sourcePackage?.matter || existingLead?.intakePackage || null,
      intakeSubmittedDate: text(sourcePackage?.submittedAt || importedAt).slice(0, 10),
      lastName: debtor.lastName || existingLead?.lastName || '',
      leadStage: existingLead?.leadStage || 'Intake Submitted',
      packageId,
      phone: debtor.phone || existingLead?.phone || '',
      readinessPolicy: { requireFileEvidence: true },
      source: {
        importedAt,
        kind: 'bk_fastlane_intake',
        packageId,
        revision: sourcePackage?.completion?.revision || sourcePackage?.revision || 1,
        syntheticOnly: sourcePackage?.syntheticOnly !== false,
      },
    }
    return readiness.reconcileLead(next, {
      evaluatedAt: options.evaluatedAt || importedAt,
      today: options.today || importedAt.slice(0, 10),
    })
  }

  function importIntakePackages(leads, packages, options = {}) {
    const next = [...list(leads)]
    list(packages).forEach((sourcePackage) => {
      const packageId = text(sourcePackage?.packageId || sourcePackage?.id)
      const index = next.findIndex((lead) => text(lead?.packageId) === packageId)
      const existing = index >= 0 ? next[index] : null
      const imported = importIntakePackage(sourcePackage, existing, options)
      if (index >= 0) next[index] = imported
      else next.unshift(imported)
    })
    return next
  }

  return {
    buildDocumentChecklist,
    importIntakePackage,
    importIntakePackages,
  }
})
