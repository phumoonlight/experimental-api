import express from 'express'
import { getTagCollections } from './get-tag-collection-controller'

const router = express.Router()

router.get('/:tag', getTagCollections)

export default router
