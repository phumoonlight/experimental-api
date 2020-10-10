import { RequestHandler } from 'express'
import { TagModel } from './tag-model'
import { STATUS_CODE } from '../common/response-status-code'
import { SuccessResponseBody, ErrorResponseBody } from '../common/interface'

const SELECTED_FIELD = '-__v'

export const getAllTagHandler: RequestHandler = async (req, res) => {
  try {
    const tagDocument = await TagModel.find().select(SELECTED_FIELD)
    const responseBody: SuccessResponseBody = {
      status_code: STATUS_CODE.successOk,
      document: tagDocument,
    }
    res.status(STATUS_CODE.successOk).json(responseBody)
  } catch (error) {
    const responseBody: ErrorResponseBody = {
      status_code: STATUS_CODE.errorInternal,
      info: error,
    }
    res.status(STATUS_CODE.errorInternal).json(responseBody)
  }
}

export const getOneTagHandler: RequestHandler = async (req, res) => {
  const paramRefId = req.params.refId
  try {
    const tagDocument = await TagModel.findOne({ ref_id: paramRefId }).select(SELECTED_FIELD)
    if (tagDocument) {
      const responseBody: SuccessResponseBody = {
        status_code: STATUS_CODE.successOk,
        document: tagDocument,
      }
      res.status(STATUS_CODE.successOk).json(responseBody)
      return
    }
    const responseBody: ErrorResponseBody = {
      status_code: STATUS_CODE.errorNotFound,
      info: 'document not found',
    }
    res.status(STATUS_CODE.successOk).json(responseBody)
  } catch (error) {
    const responseBody: ErrorResponseBody = {
      status_code: STATUS_CODE.errorInternal,
      info: error,
    }
    res.status(STATUS_CODE.errorInternal).json(responseBody)
  }
}
