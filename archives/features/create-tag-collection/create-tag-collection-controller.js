import { TagCollectionModel, TagModel } from '../../models'

const SUCCESS_RESPONSE_STATUS = 201

export const createTagCollection = async (req, res) => {
  const { id } = req.params
  const { data } = req.body
  const responseBody = {}
  let responseStatus = SUCCESS_RESPONSE_STATUS
  try {
    const tagDocument = await TagModel.findOne({ _id: id })
    if (tagDocument) {
      const tagCollectionModel = new TagCollectionModel({ tag_id: id, data })
      const createdResult = await tagCollectionModel.save()
      responseBody.created_result = createdResult
    } else {
      responseBody.created_result = null
      responseStatus = 404
    }
  } catch (error) {
    responseBody.error = error
    responseStatus = 500
  }
  res.status(responseStatus).json(responseBody)
}

export default createTagCollection
