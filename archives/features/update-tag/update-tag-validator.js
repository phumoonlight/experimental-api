import { body } from 'express-validator'
import { validateRequest } from '../../common/request-validator'
import { VALIDATION } from '../../config'

const checkBodyTagName = body('tagName')
  .trim()
  .optional()
  .isString()
  .withMessage(VALIDATION.message.string)
  .bail()
  .not()
  .equals(VALIDATION.restrictedTagName)
  .withMessage(VALIDATION.message.restrictedTagName)
  .bail()
  .notEmpty()
  .withMessage('tag name cannot be empty')
  .bail()
  .not()
  .equals(VALIDATION.restrictedTagName)
  .withMessage(VALIDATION.message.restrictedTagName)
  .bail()
  .not()
  .matches(VALIDATION.badTagNameRegex)
  .withMessage(VALIDATION.message.badTagName)

const checkBodyTagDescription = body('tagDescription')
  .escape()
  .optional()
  .isString()
  .withMessage(VALIDATION.message.string)

export const validateRequestForUpdateTag = [
  checkBodyTagName,
  checkBodyTagDescription,
  validateRequest,
]

export default validateRequestForUpdateTag
