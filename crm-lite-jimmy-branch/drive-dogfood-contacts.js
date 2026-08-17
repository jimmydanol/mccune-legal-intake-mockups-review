(function (root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  if (root) root.BKFLDriveDogfoodContacts = api
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict'

  const CONTRACT_VERSION = 'bkfl.drive-dogfood-contacts.v1'
  const OBSERVED_AT = '2026-07-27'
  const INVENTORY = Object.freeze([
    Object.freeze({ clientFolderRecords: 149, year: 2025 }),
    Object.freeze({ clientFolderRecords: 118, year: 2026 }),
  ])

  function contactFor(year, yearIndex) {
    const serial = String(yearIndex + 1).padStart(3, '0')
    const recordLabel = `${year}-${serial}`
    return {
      address: '',
      contactNotes:
        'Synthetic placeholder aligned to one Drive client-folder record. No real client identity or document content is included.',
      dogfoodYear: year,
      email: `dogfood.${year}.${serial}@example.test`,
      firstName: 'Drive',
      id: `drive-dogfood-${recordLabel}`,
      lastName: `Client ${recordLabel}`,
      middleName: '',
      name: `Drive Client ${recordLabel} (synthetic)`,
      phone: '',
      role: 'Dogfood placeholder',
      sourceName: `Drive ${year} client folders`,
      stage: 'Dogfood inventory',
      syntheticOnly: true,
    }
  }

  const contacts = Object.freeze(
    INVENTORY.flatMap(({ clientFolderRecords, year }) =>
      Array.from({ length: clientFolderRecords }, (_, index) =>
        Object.freeze(contactFor(year, index)),
      ),
    ),
  )

  return Object.freeze({
    CONTRACT_VERSION,
    INVENTORY,
    OBSERVED_AT,
    contacts,
    totalClientFolderRecords: contacts.length,
  })
})
