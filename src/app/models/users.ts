import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  name: string
  avatar_url: string
  github_username: string
  bio: string
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  avatar_url: {
    type: String,
    required: true,
    trim: true
  },
  github_username: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
