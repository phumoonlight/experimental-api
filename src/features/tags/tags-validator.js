import { param, body, header } from 'express-validator'
import { validateRequest } from '../../common/validate-request'
import { isObject } from '../../common/is-object'
import { TagModel } from './tags-model'

const isRegisteredTag = async (tag) => {
  const result = await TagModel.findOne({ tag_name: tag })
  return result ? true : Promise.reject()
}

export const registerTagValidator = [
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

export const insertTagDataValidator = [
  param('tag')
    .custom(isRegisteredTag)
    .withMessage('unregistered tag'),
  body('data')
    .exists()
    .withMessage('field required')
    .bail()
    .custom((data) => isObject(data))
    .withMessage('must be type {object}'),
  validateRequest,
]

export const deleteTagValidator = [
  header('deleteAuth')
    .equals('experimental')
    .withMessage('unauthorized'),
  validateRequest,
]
