import { Model, Schema, model } from 'mongoose';
import { IUser } from '../interfaces';

interface User extends IUser {}

interface UserModel extends Model<IUser> {}

const UserSchema = new Schema<User, UserModel>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationLink: {
    type: String,
  },
});

export default model<User, UserModel>('User', UserSchema);
