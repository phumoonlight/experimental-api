import { RequestHandler } from 'express'
// import { TagModel } from '../feature-tag/tag-module'
import { TagCollectionModel } from './tagcollection-model'
import { SuccessResponseBody, ErrorResponseBody } from '../common/interface'
import { STATUS_CODE } from '../common/response-status-code'

export const getTagCollectionByQueryHandler: RequestHandler = async (req, res, next) => {
  const queryTagRefId = req.query.tagrefid as string
  if (!queryTagRefId) {
    next()
    return
  }
  try {
    const tagCollectionDocument = await TagCollectionModel.find({
      tag_ref_id: queryTagRefId,
    })
    const responseBody: SuccessResponseBody = {
      status_code: STATUS_CODE.successOk,
      document: tagCollectionDocument,
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

export const getAllTagCollectionHandler: RequestHandler = async (req, res) => {
  try {
    const tagCollectionDocument = await TagCollectionModel.find()
    const responseBody: SuccessResponseBody = {
      status_code: STATUS_CODE.successOk,
      document: tagCollectionDocument,
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

export const getOneTagCollectionByMongoIdHandler: RequestHandler = async (req, res) => {
  const paramMongoId = req.params.mongoId
  try {
    const tagCollectionDocument = await TagCollectionModel.findById(paramMongoId)
    const responseBody: SuccessResponseBody = {
      status_code: STATUS_CODE.successOk,
      document: tagCollectionDocument,
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
