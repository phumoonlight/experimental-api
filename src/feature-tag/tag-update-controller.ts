import { RequestHandler } from 'express'
import { TagModel } from './tag-model'
import { ErrorResponseBody, SuccessResponseBody } from '../common/interface'
import { STATUS_CODE } from '../common/response-status-code'
import { DEFAULT} from '../config'

export const updateTagHandler: RequestHandler = async (req, res) => {
  const paramRefId = req.params.refId
  const bodyTagName = req.body.tag_name
  const bodyTagDescription = req.body.tag_description
  try {
    const tagDocument = await TagModel.findOne({ ref_id: paramRefId })
    if (tagDocument) {
      const IsBodyTagNameString = typeof bodyTagName === 'string'
      const IsBodyTagDescriptionString = typeof bodyTagDescription === 'string'
      const newTagName = (bodyTagName || DEFAULT.tagName)
      const newTagDescription = (bodyTagDescription || DEFAULT.tagDescription)
      tagDocument.name = (
        IsBodyTagNameString ? newTagName : tagDocument.name
      )
      tagDocument.description = (
        IsBodyTagDescriptionString ? newTagDescription : tagDocument.description
      )
      const updatedTagDocument = await tagDocument.save()
      res.status(STATUS_CODE.successOk).json({
        status_code: STATUS_CODE.successOk,
        updated_document: updatedTagDocument,
      } as SuccessResponseBody)
    } else {
      res.status(STATUS_CODE.errorNotFound).json({
        status_code: STATUS_CODE.errorNotFound,
        info: `target tag is not found`,
      } as ErrorResponseBody)
    }
  } catch (error) {
    res.status(STATUS_CODE.errorInternal).json({
      status_code: STATUS_CODE.errorInternal,
      info: error,
    } as ErrorResponseBody)
  }
}
