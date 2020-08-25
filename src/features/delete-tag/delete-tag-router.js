import express from 'express'
import { validateRequestForDeleteTag } from './delete-tag-validator'
import { deleteTag } from './delete-tag-controller'

const router = express.Router()

router.delete('/:tag', validateRequestForDeleteTag, deleteTag)

export default router
