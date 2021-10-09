import mongoose, { Schema } from 'mongoose';
import {NtpDocument, NtpModel}  from '../interfaces/ntp'


const ObjectId = mongoose.Schema.Types.ObjectId;

const NtpSchema = new Schema<NtpDocument, NtpModel>({
    title: { type: String, required: true },
    // user: { type: ObjectId, required: true },
    user: { type: String, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

export default mongoose.model('Ntp', NtpSchema);
