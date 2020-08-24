import { TagModel, TagDataModel } from './tags-model'

export const getTags = async (req, res) => {
  try {
    const tags = await TagModel.find()
    res.status(200).send({ tags })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const registerTag = async (req, res) => {
  const { tagName, tagDescription } = req.body
  const tagModel = new TagModel({
    tag_name: tagName,
    tag_description: tagDescription,
  })
  try {
    const result = await tagModel.save()
    res.status(201).send({ result })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const deleteTag = async (req, res) => {
  const { tag } = req.params
  try {
    const deleteTagResult = await TagModel.deleteOne({ tag_name: tag })
    const deleteTagDataResult = await TagDataModel.deleteMany({ tag_name: tag })
    res.status(200).send({
      removed_tag_count: deleteTagResult.deletedCount,
      removed_tagged_data: deleteTagDataResult.deletedCount,
    })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const getDataByTagName = async (req, res) => {
  const { tag } = req.params
  try {
    const data = await TagDataModel.find({ tag_name: tag })
    res.status(200).send({ tag_name: tag, data })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export const insertDataByTagName = async (req, res) => {
  const { tag } = req.params
  const { data } = req.body
  const tagDataModel = new TagDataModel({ tag_name: tag, data })
  try {
    const result = await tagDataModel.save()
    res.status(201).send({ result })
  } catch (error) {
    res.status(500).send({ error })
  }
}
