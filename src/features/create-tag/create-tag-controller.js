import { TagModel } from '../../models'

export const createTag = async (req, res) => {
  const { tagName, tagDescription } = req.body
  const responseBody = {}
  let responseStatus = 201
  const tagModel = new TagModel({
    tag_name: tagName,
    tag_description: tagDescription,
  })
  try {
    const existTag = await TagModel.findOne({ tag_name: tagName })
    if (existTag) {
      responseStatus = 422
      responseBody.error = 'duplicated tag'
    } else {
      const createdResult = await tagModel.save()
      responseBody.created_result = createdResult
    }
  } catch (error) {
    responseStatus = 500
    responseBody.error = error
  }
  res.status(responseStatus).json(responseBody)
}

export default createTag
