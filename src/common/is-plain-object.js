export const isPlainObject = (value) => (
  Object.prototype.toString.call(value) === '[object Object]'
)

export default isPlainObject
