import { TagModel } from '../../models'

export const updateTag = async (req, res) => {
  const { id } = req.params
  const { tagName, tagDescription } = req.body
  const responseBody = {}
  let responseStatus = 200
  try {
    const tagDocument = await TagModel.findOne({ _id: id })
    if (tagName) tagDocument.tag_name = tagName
    if (tagDescription) tagDocument.tag_description = tagDescription
    const updateResult = await tagDocument.save()
    responseStatus = 200
    responseBody.updated_result = updateResult
  } catch (error) {
    responseStatus = 500
    responseBody.error = error
  }

  res.status(responseStatus).json(responseBody)
}

export default updateTag
