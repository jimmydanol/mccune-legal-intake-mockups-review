(function (root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  if (root) root.BKFLDemoDocuments = api
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict'

  const ROOT = './output/pdf/demo-documents/'
  const FILENAMES = Object.freeze([
    'bank-statements.pdf',
    'kbb-2019-civic.pdf',
    'mortgage-statement-march.pdf',
    'ortega-1040-2024.pdf',
    'ortega-1040-2025.pdf',
    'ortega-cc-cert.pdf',
    'ortega-collections.pdf',
    'ortega-license.pdf',
    'ortega-ssc.pdf',
    'ortega-stubs-jan-jun.pdf',
    'tran-1040-2025.pdf',
    'tran-cc-statements.pdf',
    'tran-chase-jan-jun.pdf',
    'tran-honda-finance.pdf',
    'tran-license.pdf',
    'tran-w2-2025.pdf',
    'zillow-1422-elm.pdf',
  ])
  const AVAILABLE = new Set(FILENAMES)

  function text(value) {
    return typeof value === 'string' ? value.trim() : ''
  }

  function mimeTypeFor(name, explicitType) {
    if (text(explicitType)) return text(explicitType).toLowerCase()
    const lower = text(name).toLowerCase()
    if (lower.endsWith('.pdf')) return 'application/pdf'
    if (lower.endsWith('.png')) return 'image/png'
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg'
    return 'application/octet-stream'
  }

  function currentFile(document, files) {
    const candidates = Array.isArray(files) ? files : []
    const selectedName = text(document?.fileName || document?.rejectedFile)
    return (
      candidates.find((file) => text(file?.name) === selectedName) ||
      [...candidates].reverse().find((file) => file?.status === 'current') ||
      [...candidates].reverse()[0] ||
      null
    )
  }

  function resolve(document, files) {
    const file = currentFile(document, files)
    const name = text(document?.fileName || document?.rejectedFile || file?.name)
    if (!name) return null

    const directUrl = text(
      file?.previewUrl ||
        file?.url ||
        file?.downloadUrl ||
        document?.previewUrl ||
        document?.url,
    )
    if (directUrl) {
      const directMimeType = mimeTypeFor(name, file?.mimeType || file?.type)
      return {
        kind: directMimeType.startsWith('image/') ? 'image' : 'pdf',
        mimeType: directMimeType,
        name,
        previewUrl: directMimeType.startsWith('image/') ? directUrl : null,
        synthetic: document?.source?.syntheticOnly !== false,
        url: directUrl,
      }
    }

    if (!AVAILABLE.has(name)) return null
    return {
      kind: 'image',
      mimeType: 'application/pdf',
      name,
      previewUrl: `${ROOT}previews/${encodeURIComponent(name.replace(/\.pdf$/i, '.png'))}`,
      synthetic: true,
      url: `${ROOT}${encodeURIComponent(name)}`,
    }
  }

  return {
    FILENAMES,
    ROOT,
    mimeTypeFor,
    resolve,
  }
})
