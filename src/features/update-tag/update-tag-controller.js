import { TagModel } from '../../models'

export const updateTag = async (req, res) => {
  const { id } = req.params
  const { tagName, tagDescription } = req.body
  const response = {
    status: 200,
    body: {},
  }

  try {
    const tagDocument = await TagModel.findOne({ _id: id })
    if (tagName) tagDocument.tag_name = tagName
    if (tagDescription) tagDocument.tag_description = tagDescription
    const updateResult = await tagDocument.save()
    response.status = 200
    response.body.updated_result = updateResult
  } catch (error) {
    response.status = 500
    response.body.error = error
  }

  res.status(response.status).send(response.body)
}

export default updateTag
