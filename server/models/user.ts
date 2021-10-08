import mongoose, { Schema } from 'mongoose';
import {PasswordResetOrderDocument, PasswordResetOrderModel}  from '../interfaces/user'
  
// import { getOrCreateModel } from '@growi/core';
  
const ObjectId = mongoose.Schema.Types.ObjectId;


const schema = new Schema<PasswordResetOrderDocument, PasswordResetOrderModel>({
    token: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    relatedUser: { type: ObjectId, ref: 'User' },
    isRevoked: { type: Boolean, default: false, required: true },
});

  
// export default getOrCreateModel<PasswordResetOrderDocument, PasswordResetOrderModel>('PasswordResetOrder', schema);
export default mongoose.model('PasswordResetOrder', schema);