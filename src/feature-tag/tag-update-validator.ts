import { RequestHandler } from 'express'
import { body } from 'express-validator'
import { requestValidatorHandler } from '../common/request-validator'
import { UPDATE_TAG_BODY } from '../common/request-body-field'
import { VALIDATION_MESSAGE } from '../config'

export const updateTagBodyValidator = [
  body(UPDATE_TAG_BODY.tagName)
    .optional()
    .isString()
    .withMessage(VALIDATION_MESSAGE.string)
    .escape(),
  body(UPDATE_TAG_BODY.tagDescription)
    .optional()
    .isString()
    .withMessage(VALIDATION_MESSAGE.string)
    .escape(),
  requestValidatorHandler,
]
