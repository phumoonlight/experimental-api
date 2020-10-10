import { Document } from 'mongoose'

export interface BaseResponse {
  status_code: number
}

export interface ErrorResponseBody extends BaseResponse {
  info?: any
}

export interface SuccessResponseBody extends BaseResponse {
  document?: any
  created_document?: any
  updated_document?: any
  deleted_document?: any
  info?: any
}

export interface TagDocument extends Document {
  ref_id?: string,
  name?: string,
  description?: string,
}

export interface TagCollectionDocument extends Document {
  tag_ref_id: string,
  data: object,
}