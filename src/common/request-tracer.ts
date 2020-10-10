import { RequestHandler } from 'express'

const PREFIX = '[request-tracer]'
export const traceRequest = (): RequestHandler => (
  (req, res, next) => {
    console.info(`${PREFIX} ${req.method} ${req.url}`)
    next()
  }
)
