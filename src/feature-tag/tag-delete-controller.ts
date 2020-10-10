import { RequestHandler } from 'express'
import { TagModel } from './tag-model'
import { TagCollectionModel } from '../feature-tagcollection/tagcollection-module'
import { ErrorResponseBody, SuccessResponseBody } from '../common/interface'
import { STATUS_CODE } from '../common/response-status-code'

export const deleteTagHandler: RequestHandler = async (req, res) => {
  const paramRefId = req.params.refId
  try {
    const deletedDocument = await TagModel.findOneAndDelete({ ref_id: paramRefId })
    await TagCollectionModel.deleteMany({ tag_ref_id: paramRefId })
    res.status(STATUS_CODE.successOk).json({
      status_code: STATUS_CODE.successOk,
      deleted_document: deletedDocument,
    } as SuccessResponseBody)
  } catch (error) {
    res.status(STATUS_CODE.errorInternal).json({
      status_code: STATUS_CODE.errorInternal,
      info: error,
    } as ErrorResponseBody)
  }
}
