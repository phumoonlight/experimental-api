import { header } from 'express-validator'
import { validateRequest } from '../../common/request-validator'

export const validateRequestForDeleteTag = [
  header('expapi-auth')
    .equals('experimental-delete')
    .withMessage('unauthorized'),
  validateRequest,
]

export default validateRequestForDeleteTag
