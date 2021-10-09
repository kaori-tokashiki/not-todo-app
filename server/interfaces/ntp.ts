import { Model, Document } from 'mongoose';
import { IUser } from '../interfaces/user';


export interface INtp {
    title: string,
    // user: IUser,
    user: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface NtpDocument extends INtp, Document {
}
  
export interface NtpModel extends Model<NtpDocument> {
}
