import { Model, Document } from 'mongoose';

export interface IUser {
    username: string,
    email: string,
    password: any,
    image: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface UserDocument extends IUser, Document {
    // isExpired(): Promise<boolean>
    // revokeOneTimeToken(): Promise<void>
}
  
export interface UserModel extends Model<UserDocument> {
    // generateOneTimeToken(): string
    // createPasswordResetOrder(email: string): UserDocument
}