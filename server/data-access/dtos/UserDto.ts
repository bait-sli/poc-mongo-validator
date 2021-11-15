import { Schema, model, ObjectId } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
export const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  avatar: String
});

// 3. Create a Model.
export const UserModel = model<User>('User', UserSchema);