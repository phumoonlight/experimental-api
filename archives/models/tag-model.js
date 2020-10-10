import mongoose from 'mongoose'
import { MONGO_COLLECTIONS } from '../config'

const tagSchema = new mongoose.Schema({
  tag_name: {
    type: String,
    unique: true,
  },
  tag_description: {
    type: String,
    default: 'No description.',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

export const TagModel = mongoose.model(
  MONGO_COLLECTIONS.tags,
  tagSchema,
)

export default TagModel
