import { TagCollectionModel } from '../../models'

export const createTagCollection = async (req, res) => {
  const { tag } = req.params
  const { data } = req.body
  const tagCollectionModel = new TagCollectionModel({ tag_name: tag, data })
  try {
    const result = await tagCollectionModel.save()
    res.status(201).send({ result })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export default createTagCollection
