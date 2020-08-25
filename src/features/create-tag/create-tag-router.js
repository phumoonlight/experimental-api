import express from 'express'
import { validateRequestForCreateTag } from './create-tag-validator'
import { createTag } from './create-tag-controller'

const router = express.Router()

router.post('/', validateRequestForCreateTag, createTag)

export default router
