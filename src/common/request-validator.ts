import { RequestHandler } from 'express'
import { validationResult, ErrorFormatter, Result } from 'express-validator'

const formatter: ErrorFormatter = (error) => (
  `${error.location}[${error.param}]: ${error.msg}`
)

export const requestValidatorHandler: RequestHandler = (req, res, next) => {
  const validateResult: Result = validationResult(req).formatWith(formatter)
  if (validateResult.isEmpty()) {
    next()
    return
  }
  res.status(422).json({
    status_code: 422,
    info: validateResult.array()
  })
}
