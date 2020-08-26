import express from 'express'
import { validateRequestForCreateTagCollection } from './create-tag-collection-validator'
import { createTagCollection } from './create-tag-collection-controller'

const router = express.Router()

router.post('/:id', validateRequestForCreateTagCollection, createTagCollection)

export default router
