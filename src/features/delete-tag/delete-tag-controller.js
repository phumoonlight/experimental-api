import { TagModel, TagDataModel } from '../../models'

export const deleteTag = async (req, res) => {
  const { tag } = req.params
  try {
    const deleteTagResult = await TagModel.deleteOne({ tag_name: tag })
    const deleteTagDataResult = await TagDataModel.deleteMany({ tag_name: tag })
    res.status(200).send({
      removed_tag_count: deleteTagResult.deletedCount,
      removed_tagged_data: deleteTagDataResult.deletedCount,
    })
  } catch (error) {
    res.status(500).send({ error })
  }
}

export default deleteTag
