import { RequestHandler } from 'express'
import { body } from 'express-validator'
import { TagModel } from './tag-model'
import { requestValidatorHandler } from '../common/request-validator'
import { STATUS_CODE } from '../common/response-status-code'
import { VALIDATION_MESSAGE } from '../config'

const REQUEST_POST_BODY = {
  tagRefId: 'tag_ref_id',
  tagName: 'tag_name',
  tagDescription: 'tag_description',
}

export const checkDuplicatedTagRefIdValidator: RequestHandler = async (req, res, next) => {
  const bodyRefId = req.body.tag_ref_id
  try {
    const existTag = await TagModel.findOne({
      ref_id: bodyRefId,
    })
    if (existTag) {
      res.status(STATUS_CODE.errorUnprocessableEntity).json({
        status_code: STATUS_CODE.errorUnprocessableEntity,
        info: `tag reference id {${bodyRefId}} already in use.`,
      })
    } else {
      next()
    }
  } catch (error) {
    res.status(STATUS_CODE.errorInternal).json({
      status_code: STATUS_CODE.errorInternal,
      info: error,
    })
  }
}

export const createTagBodyValidator = [
  body(REQUEST_POST_BODY.tagRefId)
    .exists()
    .withMessage(VALIDATION_MESSAGE.required)
    .bail()
    .isString()
    .withMessage(VALIDATION_MESSAGE.string)
    .bail()
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.noEmpty)
    .bail()
    .not()
    .matches(/[^a-z0-9-]/, 'gi')
    .withMessage(VALIDATION_MESSAGE.badTagRefId),
  body(REQUEST_POST_BODY.tagName)
    .optional()
    .isString()
    .withMessage(VALIDATION_MESSAGE.string)
    .bail()
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.noEmpty)
    .escape(),
  body(REQUEST_POST_BODY.tagDescription)
    .optional()
    .isString()
    .withMessage(VALIDATION_MESSAGE.string)
    .escape(),
  requestValidatorHandler,
]
