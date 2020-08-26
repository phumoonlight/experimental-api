import express from 'express'
import { validateRequestForDeleteTagCollection } from './delete-tag-collection-validator'
import { deleteTagCollection } from './delete-tag-collection-controller'

const router = express.Router()

router.delete(
  '/collections/:id',
  validateRequestForDeleteTagCollection,
  deleteTagCollection,
)

export default router
