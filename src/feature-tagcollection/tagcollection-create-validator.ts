import { body } from 'express-validator'
import { requestValidatorHandler } from '../common/request-validator'
import { isPlainObject } from '../common/common-validator'
import { CREATE_TAGCOLLECTION_BODY } from '../common/request-body-field'
import { VALIDATION_MESSAGE } from '../config'

export const createTagCollectionBodyValidator = [
  body(CREATE_TAGCOLLECTION_BODY.tagRefId)
    .exists()
    .withMessage(VALIDATION_MESSAGE.required)
    .bail(),
  body(CREATE_TAGCOLLECTION_BODY.tagData)
    .exists()
    .withMessage(VALIDATION_MESSAGE.required)
    .bail()
    .custom((data) => isPlainObject(data))
    .withMessage(VALIDATION_MESSAGE.object),
  requestValidatorHandler,
]
