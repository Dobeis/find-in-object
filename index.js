const findKeyObject = (object, key) => {
  let value
  Object.keys(object).some(function (k) {
    if (k === key) {
      value = object[k]
      return true
    }
    if (object[k] && typeof object[k] === 'object') {
      value = findKeyObject(object[k], key)
      return value !== undefined
    }
  })
  return value
}

module.exports = findKeyObject

