import { ObjectId } from 'mongodb';
import { IUser } from '../interfaces';

export class UserDto {
  email: string;
  id: ObjectId;
  isActivated?: boolean;

  constructor(model: IUser) {
    this.id = model._id;
    this.email = model.email;
    this.isActivated = model.isActivated;
  }
}
