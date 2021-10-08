import mongoose, { Schema } from 'mongoose';
import {UserDocument, UserModel}  from '../interfaces/user'

const userSchema = new Schema<UserDocument, UserModel>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

export default mongoose.model('User', userSchema);
