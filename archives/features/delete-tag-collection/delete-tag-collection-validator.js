import { header, param } from 'express-validator'
import { validateRequest } from '../../common/request-validator'

export const validateRequestForDeleteTagCollection = [
  header('expapi-auth')
    .equals('experimental-delete')
    .withMessage('unauthorized'),
  param('id')
    .isMongoId()
    .withMessage('must be mongoid'),
  validateRequest,
]

export default validateRequestForDeleteTagCollection
