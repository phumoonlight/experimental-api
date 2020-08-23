import mongoose from 'mongoose'
import { MONGO_COLLECTIONS } from '../../config'

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

export const TagModel = mongoose.model(MONGO_COLLECTIONS.tags, tagSchema)

export default TagModel
