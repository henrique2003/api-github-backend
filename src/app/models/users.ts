import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  name: string
  imageProfile: string
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  imageProfile: {
    type: String,
    required: true,
    trim: true
  }
})

export default model<UserInterface>('User', UserSchema)
