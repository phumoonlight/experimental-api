import { TagModel } from '../../models'

export const createTag = async (req, res) => {
  const { tagName, tagDescription } = req.body
  const tagModel = new TagModel({
    tag_name: tagName,
    tag_description: tagDescription,
  })
  try {
    const result = await tagModel.save()
    res.status(201).send({ result })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export default createTag
