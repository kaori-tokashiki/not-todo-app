import { Model, Document } from 'mongoose';

export interface IPasswordResetOrder {
    token: string,
    email: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    relatedUser: any,
    isRevoked: boolean,
    createdAt: Date,
    expiredAt: Date,
}

export interface PasswordResetOrderDocument extends IPasswordResetOrder, Document {
    isExpired(): Promise<boolean>
    revokeOneTimeToken(): Promise<void>
}
  
export interface PasswordResetOrderModel extends Model<PasswordResetOrderDocument> {
    generateOneTimeToken(): string
    createPasswordResetOrder(email: string): PasswordResetOrderDocument
}