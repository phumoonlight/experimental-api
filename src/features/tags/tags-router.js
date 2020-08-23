import express from 'express'
import { TagModel } from './tags-model'
import { TagDataModel } from './tags-data-model'
import { saveDataValidator } from './tags-validator'

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await TagModel.find()
  res.send({
    tags: result,
  })
})

router.post('/', async (req, res) => {
  const { name } = req.body
  const tagModel = new TagModel({ name })
  try {
    const result = await tagModel.save()
    res.send({
      result,
    })
  } catch (error) {
    res.send({
      message: 'error',
    })
  }
})

router.get('/:tag', async (req, res) => {
  const { tag } = req.params
  const data = await TagDataModel.find({ tag_name: tag })
  res.send({
    tag_name: tag,
    data,
  })
})

router.post('/:tag', saveDataValidator, async (req, res) => {
  const { tag } = req.params
  const { data } = req.body
  const tagDataModel = new TagDataModel({ tag_name: tag, data })
  const result = await tagDataModel.save()
  res.send({
    result,
  })
})

export default router
