import 'express';
import { Request } from 'express';
import { IUser } from '../interfaces/user-interface';

declare module 'express' {
  export interface Request {
    user?: IUser;
  }
}
