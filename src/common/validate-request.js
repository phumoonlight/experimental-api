import { validationResult } from 'express-validator'

const formatter = (error) => `${error.location}[${error.param}]: ${error.msg}`

export const validateRequest = (req, res, next) => {
  const result = validationResult(req).formatWith(formatter)
  if (result.isEmpty()) next()
  else res.status(422).send({ errors: result.array() })
}

export default validateRequest
