import mongoose from 'mongoose'
import { MONGO_COLLECTIONS } from '../config'

const tagCollectionSchema = new mongoose.Schema({
  tag_id: {
    type: String,
    index: true,
    ref: MONGO_COLLECTIONS.tags,
  },
  data: {
    type: Object,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

export const TagCollectionModel = mongoose.model(
  MONGO_COLLECTIONS.tagsCollections,
  tagCollectionSchema,
)

export default TagCollectionModel
