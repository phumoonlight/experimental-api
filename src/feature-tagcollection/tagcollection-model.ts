import mongoose from 'mongoose'
import { TagCollectionDocument } from '../common/interface'

const tagCollectionSchema = new mongoose.Schema(
  {
    tag_ref_id: {
      type: String,
      index: true,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

export const TagCollectionModel = mongoose.model<TagCollectionDocument>(
  'tags-collections',
  tagCollectionSchema,
)
