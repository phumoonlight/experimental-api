import { param, body } from 'express-validator'
import { validateRequest } from '../../common/request-validator'
import { isPlainObject } from '../../common/is-plain-object'

export const validateRequestForCreateTagCollection = [
  param('id')
    .isMongoId()
    .withMessage('must be {mongoid}'),
  body('data')
    .exists()
    .withMessage('field required')
    .bail()
    .custom((data) => isPlainObject(data))
    .withMessage('must be type {object}'),
  validateRequest,
]

export default validateRequestForCreateTagCollection
