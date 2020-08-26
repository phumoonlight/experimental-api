import { body } from 'express-validator'
import { validateRequest } from '../../common/request-validator'

export const validateRequestForCreateTag = [
  body('tagName')
    .exists()
    .withMessage('field required')
    .bail()
    .isString()
    .withMessage('must be {string}')
    .bail()
    .not()
    .equals('collections')
    .withMessage('restricted tag name')
    .bail()
    .not()
    .matches(/[^a-z0-9-]/, 'gi')
    .withMessage('bad tag name'),
  body('tagDescription')
    .optional()
    .isString()
    .withMessage('must be {string}')
    .escape(),
  validateRequest,
]

export default validateRequestForCreateTag
