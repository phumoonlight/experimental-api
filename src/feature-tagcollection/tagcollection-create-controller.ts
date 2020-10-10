import { RequestHandler } from 'express'
import { TagCollectionModel } from './tagcollection-model'
import { TagModel } from '../feature-tag/tag-module'
import { ErrorResponseBody, SuccessResponseBody } from '../common/interface'
import { STATUS_CODE } from '../common/response-status-code'

export const createTagCollectionHandler: RequestHandler = async (req, res) => {
  const bodyTagRefId = req.body.tag_ref_id
  const bodyTagCollectionData = req.body.data
  try {
    const tagDocument = await TagModel.findOne({
      ref_id: bodyTagRefId
    })
    if (tagDocument) {
      const tagCollectionModel = new TagCollectionModel({
        tag_ref_id: bodyTagRefId,
        data: bodyTagCollectionData,
      })
      const createdDocument = await tagCollectionModel.save()
      res.status(STATUS_CODE.successCreated).json({
        status_code: STATUS_CODE.successCreated,
        created_document: createdDocument,
      } as SuccessResponseBody)
      return
    }
    res.status(STATUS_CODE.errorNotFound).json({
      status_code: STATUS_CODE.errorNotFound,
      info: `tag reference id {${bodyTagRefId}} is not found.`
    } as ErrorResponseBody)
  } catch (error) {
    res.status(STATUS_CODE.errorInternal).json({
      status_code: STATUS_CODE.errorInternal,
      info: error
    } as ErrorResponseBody)
  }
}
