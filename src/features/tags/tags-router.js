import express from 'express'
import {
  insertTagDataValidator,
  registerTagValidator,
  deleteTagValidator,
} from './tags-validator'
import {
  getTags,
  registerTag,
  getDataByTagName,
  insertDataByTagName,
  deleteTag,
} from './tags-controller'

const router = express.Router()

router.get('/', getTags)
router.post('/', registerTagValidator, registerTag)

router.get('/:tag', getDataByTagName)
router.post('/:tag', insertTagDataValidator, insertDataByTagName)
router.delete('/:tag', deleteTagValidator, deleteTag)

export default router
