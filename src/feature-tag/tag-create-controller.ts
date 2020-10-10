import { RequestHandler } from 'express'
import { TagModel } from './tag-model'
import { STATUS_CODE } from '../common/response-status-code'

export const createTagHandler: RequestHandler = async (req, res) => {
  const bodyRefId = req.body.tag_ref_id
  const bodyTagName = req.body.tag_name
  const bodyTagDescription = req.body.tag_description
  try {
    const createdDocument = await TagModel.create({
      ref_id: bodyRefId,
      name: bodyTagName,
      description: bodyTagDescription,
    })
    res.status(STATUS_CODE.successCreated).json({
      status_code: STATUS_CODE.successCreated,
      created_document: createdDocument,
    })
  } catch (error) {
    res.status(STATUS_CODE.errorInternal).json({
      status_code: STATUS_CODE.errorInternal,
      info: error,
    })
  }
}
