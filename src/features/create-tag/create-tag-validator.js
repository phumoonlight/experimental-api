import { body } from 'express-validator'
import { validateRequest } from '../../common/request-validator'

export const validateRequestForCreateTag = [
  body('tagName')
    .exists()
    .withMessage('field required')
    .bail()
    .isString()
    .withMessage('must be type {string}'),
  body('tagDescription')
    .optional()
    .isString()
    .withMessage('must be type {string}'),
  validateRequest,
]

export default validateRequestForCreateTag
