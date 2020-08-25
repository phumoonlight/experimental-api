import { param, body } from 'express-validator'
import { TagModel } from '../../models'
import { validateRequest } from '../../common/request-validator'
import { isPlainObject } from '../../common/is-plain-object'

const isCreatedTag = async (tag) => {
  const result = await TagModel.findOne({ tag_name: tag })
  return result ? true : Promise.reject()
}

export const validateRequestForCreateTagCollection = [
  param('tag')
    .custom(isCreatedTag)
    .withMessage('undefined tag, must create tag first.'),
  body('data')
    .exists()
    .withMessage('field required.')
    .bail()
    .custom((data) => isPlainObject(data))
    .withMessage('must be type {object}.'),
  validateRequest,
]

export default validateRequestForCreateTagCollection
