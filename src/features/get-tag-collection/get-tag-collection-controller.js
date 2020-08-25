import { TagCollectionModel } from '../../models'

export const getTagCollections = async (req, res) => {
  const { tag } = req.params
  try {
    const tagCollections = await TagCollectionModel
      .find({ tag_name: tag })
      .select('data')
    res.status(200).send({
      tag_name: tag,
      tag_collections: tagCollections,
    })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export default getTagCollections
