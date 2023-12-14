import { ObjectId } from 'mongodb';

export interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
  isActivated?: boolean;
  activationLink?: string;
}

export interface IToken {
  refreshToken: string;
}
