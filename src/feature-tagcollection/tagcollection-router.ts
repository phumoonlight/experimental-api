import express from 'express'
import { createTagCollectionBodyValidator } from './tagcollection-create-validator'
import { createTagCollectionHandler } from './tagcollection-create-controller'
import * as tagCollectionGetController from './tagcollection-get-controller'

export const tagCollectionRouter = express.Router()

tagCollectionRouter.get(
  '/',
  tagCollectionGetController.getTagCollectionByQueryHandler,
  tagCollectionGetController.getAllTagCollectionHandler,
)

// tagRouter.get(
//   '/:refId',
//   getOneTagHandler,
// )

tagCollectionRouter.post(
  '/',
  createTagCollectionBodyValidator,
  createTagCollectionHandler,
)

// tagRouter.patch(
//   '/:refId',
//   updateTagBodyValidator,
//   updateTagHandler,
// )

// tagRouter.delete(
//   '/:refId',
//   deleteTagHandler,
// )




