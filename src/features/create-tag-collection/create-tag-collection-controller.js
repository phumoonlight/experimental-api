import { TagDataModel } from '../../models'

export const createTagCollection = async (req, res) => {
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

export default createTagCollection
