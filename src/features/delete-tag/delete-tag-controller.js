import { TagModel, TagCollectionModel } from '../../models'

export const deleteTag = async (req, res) => {
  const { id } = req.params
  const responseBody = {}
  let responseStatus = 200
  try {
    const deletedTagResult = await TagModel.deleteOne({ _id: id })
    const deletedTagCollectionResult = await TagCollectionModel.deleteMany({ tag_id: id })
    responseBody.deleted_tag_count = deletedTagResult.deletedCount
    responseBody.deleted_collection_count = deletedTagCollectionResult.deletedCount
  } catch (error) {
    responseBody.error = error
    responseStatus = 500
  }
  res.status(responseStatus).send(responseBody)
}

export default deleteTag
