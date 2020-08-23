import { param, validationResult } from 'express-validator'
import { TagModel } from './tags-model'

const getValidatorHandler = () => (
  (req, res, next) => {
    const result = validationResult(req)
      .formatWith((error) => `${error.location}[${error.param}]: ${error.msg}`)
    if (result.isEmpty()) return next()
    return res.json({ errors: result.array() })
  }
)

export const saveDataValidator = [
  param('tag').custom(async (tag) => {
    const result = await TagModel.findOne({ name: tag })
    return result ? true : Promise.reject()
  }).withMessage('unregistered tag'),
  getValidatorHandler(),
]

export default saveDataValidator
