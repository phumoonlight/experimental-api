import { TagModel } from '../../models'

export const getTags = async (req, res) => {
  try {
    const tags = await TagModel.find()
    res.status(200).send({ tags })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export default getTags
