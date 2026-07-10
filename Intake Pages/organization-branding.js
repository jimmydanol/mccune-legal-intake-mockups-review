(function attachOrganizationBranding(root, factory) {
  var api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  root.BKFLOrganizationBranding = api
  if (root.document) api.start(root)
})(typeof globalThis !== 'undefined' ? globalThis : this, function createOrganizationBranding() {
  'use strict'

  var STORAGE_KEY = 'bkfl_lite_org_v1'
  var DEFAULT_NAME = 'McCune Legal'

  function clean(value) {
    return typeof value === 'string' ? value.trim() : ''
  }

  function readOrganization(storage) {
    try {
      var saved = JSON.parse(storage.getItem(STORAGE_KEY) || 'null')
      if (!saved || typeof saved !== 'object') return null
      var name = clean(saved.name) || DEFAULT_NAME
      var logo = clean(saved.logo)
      if (logo && !/^data:image\/(?:png|jpe?g|webp|gif);/i.test(logo)) logo = ''
      return { name: name, logo: logo }
    } catch (error) {
      return null
    }
  }

  function organizationInitials(name) {
    return clean(name)
      .split(/\s+/)
      .filter(Boolean)
      .map(function firstLetter(part) { return part.charAt(0) })
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'BK'
  }

  function initialsLogo(name) {
    var initials = organizationInitials(name)
    var svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120">',
      '<rect width="120" height="120" rx="14" fill="#224e5f"/>',
      '<text x="60" y="73" text-anchor="middle" font-family="Arial,sans-serif" ',
      'font-size="46" font-weight="700" fill="white">', initials, '</text></svg>',
    ].join('')
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg)
  }

  function cssImage(value) {
    return 'url(' + JSON.stringify(value) + ')'
  }

  function applyBackgroundLogo(element, image, name) {
    element.textContent = ''
    element.setAttribute('role', 'img')
    element.setAttribute('aria-label', name + ' logo')
    element.style.backgroundImage = cssImage(image)
    element.style.backgroundColor = '#fff'
    element.style.backgroundPosition = 'center'
    element.style.backgroundRepeat = 'no-repeat'
    element.style.backgroundSize = 'contain'
  }

  function applyBranding(document, organization) {
    if (!document || !organization) return false

    var name = clean(organization.name) || DEFAULT_NAME
    var image = clean(organization.logo) || initialsLogo(name)

    document.documentElement.style.setProperty('--firm-name', JSON.stringify(name))
    document.documentElement.style.setProperty('--firm-logo', cssImage(image))
    document.title = document.title.replace(/McCune Legal/gi, name)

    document.querySelectorAll('.firm .nm').forEach(function setFirmName(element) {
      element.textContent = name
    })

    document.querySelectorAll('.hdr .hdr-left .logo-mark').forEach(function setHeaderLogo(element) {
      applyBackgroundLogo(element, image, name)
    })

    document.querySelectorAll('.brand h1').forEach(function setReviewHeader(element) {
      element.textContent = name + ' Intake'
    })

    document.querySelectorAll('.brand .logo').forEach(function setReviewLogo(element) {
      applyBackgroundLogo(element, image, name)
    })

    document.querySelectorAll('img.toplogo').forEach(function setLoginLogo(element) {
      element.src = image
      element.alt = name + ' logo'
      element.style.objectFit = 'contain'
    })

    return true
  }

  function start(windowObject) {
    function render() {
      var storage
      try { storage = windowObject.localStorage } catch (error) { return }
      applyBranding(windowObject.document, readOrganization(storage))
    }

    if (windowObject.document.readyState === 'loading') {
      windowObject.document.addEventListener('DOMContentLoaded', render)
    } else {
      render()
    }

    windowObject.addEventListener('storage', function handleOrganizationChange(event) {
      if (event.key === STORAGE_KEY) render()
    })
    windowObject.addEventListener('pageshow', render)
  }

  return {
    STORAGE_KEY: STORAGE_KEY,
    applyBranding: applyBranding,
    initialsLogo: initialsLogo,
    organizationInitials: organizationInitials,
    readOrganization: readOrganization,
    start: start,
  }
})
