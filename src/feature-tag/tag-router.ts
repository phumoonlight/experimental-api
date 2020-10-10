import express from 'express'
import { getAllTagHandler, getOneTagHandler } from './tag-get-controller'
import { createTagBodyValidator, checkDuplicatedTagRefIdValidator } from './tag-create-validator'
import { createTagHandler } from './tag-create-controller'
import { updateTagBodyValidator } from './tag-update-validator'
import { updateTagHandler } from './tag-update-controller'
import { deleteTagHandler } from './tag-delete-controller'

export const tagRouter = express.Router()

tagRouter.get(
  '/',
  getAllTagHandler,
)

tagRouter.get(
  '/:refId',
  getOneTagHandler,
)

tagRouter.post(
  '/',
  createTagBodyValidator,
  checkDuplicatedTagRefIdValidator,
  createTagHandler,
)

tagRouter.patch(
  '/:refId',
  updateTagBodyValidator,
  updateTagHandler,
)

tagRouter.delete(
  '/:refId',
  deleteTagHandler,
)




