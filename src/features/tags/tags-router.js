import express from 'express'
import {
  insertTagDataValidator,
  registerTagValidator,
} from './tags-validator'
import {
  getTags,
  registerTag,
  getDataByTagName,
  insertDataByTagName,
} from './tags-controller'

const router = express.Router()

router.get('/', getTags)
router.post('/', registerTagValidator, registerTag)

router.get('/:tag', getDataByTagName)
router.post('/:tag', insertTagDataValidator, insertDataByTagName)

export default router
