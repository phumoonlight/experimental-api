import mongoose from 'mongoose'
import { TagDocument } from '../common/interface'

const tagSchema = new mongoose.Schema(
  {
    ref_id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      default: 'Unnamed tag'
    },
    description: {
      type: String,
      default: 'No description.',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

export const TagModel = mongoose.model<TagDocument>('tags', tagSchema)
