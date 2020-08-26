import { TagCollectionModel, TagModel } from '../../models'

const SELECTED_FIELD = 'data created_at updated_at'

export const getTagCollections = async (req, res) => {
  const { tag } = req.params
  const response = {
    status: 200,
    body: {},
  }

  try {
    const tagDocument = await TagModel.findOne({ tag_name: tag })
    if (tagDocument) {
      const { _id: tagID } = tagDocument
      const tagCollections = await TagCollectionModel
        .find({ tag_id: tagID })
        .select(SELECTED_FIELD)
      response.status = 200
      response.body.tag_collections = tagCollections
    } else {
      response.status = 404
      response.body.tag_collections = []
    }
  } catch (error) {
    response.status = 500
    response.body.error = error
  }

  res.status(response.status).json(response.body)
}

export default getTagCollections
