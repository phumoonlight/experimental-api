import express from 'express'
import { validateRequestForUpdateTag } from './update-tag-validator'
import { updateTag } from './update-tag-controller'

const router = express.Router()

router.patch(
  '/:id',
  validateRequestForUpdateTag,
  updateTag,
)

export default router
