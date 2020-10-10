import { TagModel } from '../../models'

const SELECTED_FIELD = '-__v'

export const getTags = async (req, res) => {
  const responseBody = {}
  let responseStatus = 200
  try {
    const tags = await TagModel.find().select(SELECTED_FIELD)
    responseBody.tags = tags
  } catch (error) {
    responseBody.error = error
    responseStatus = 500
  }
  res.status(responseStatus).json(responseBody)
}

export default getTags
