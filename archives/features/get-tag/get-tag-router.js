import express from 'express'
import { getTags } from './get-tag-controller'

const router = express.Router()

router.get('/', getTags)

export default router
