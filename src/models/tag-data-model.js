import mongoose from 'mongoose'
import { MONGO_COLLECTIONS } from '../config'

const tagDataSchema = new mongoose.Schema({
  tag_name: {
    type: String,
    index: true,
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

export const TagDataModel = mongoose.model(
  MONGO_COLLECTIONS.tagsData,
  tagDataSchema,
)

export default TagDataModel
