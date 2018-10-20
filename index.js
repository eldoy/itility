const itility = {}

itility.mode = (x, d, s, p) => {
  if (typeof p === 'undefined') { p = s; s = undefined }

  if (typeof x !== 'string') {
    throw new Error(`The first parameter must be a string`)
  }

  let a
  if (typeof d === 'object') {
    a = d
  } else  {
    a = { 'test': d, 'development': d, 'staging': s, 'production': p }
  }

  const m = process.env.NODE_ENV || 'development'

  if (!a[m]) {
    throw new Error(`Mode ${m} not found`)
  }

  return x.replace(/\*/, a[m])
}

module.exports = itility