export const trace = (enabled = true) => (req, res, next) => {
  if (enabled) console.info(`${req.method} ${req.url}`)
  next()
}

export default trace
