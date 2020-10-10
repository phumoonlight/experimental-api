import { TagCollectionModel } from '../../models'

export const deleteTagCollection = async (req, res) => {
  const { id } = req.params
  const responseBody = {}
  let responseStatus = 200
  try {
    const deletedResult = await TagCollectionModel.deleteOne({ _id: id })
    responseBody.deleted_collection_count = deletedResult.deletedCount
  } catch (error) {
    responseBody.error = error
    responseStatus = 500
  }
  res.status(responseStatus).json(responseBody)
}

export default deleteTagCollection
