import { Document, Model, Schema, model } from 'mongoose';
import { IToken, IUser } from '../interfaces';

interface Token extends Document, IToken {
  user: IUser;
}

interface TokenModel extends Model<IToken> {}

const TokenSchema = new Schema<Token, TokenModel>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
});

export default model<Token, TokenModel>('Token', TokenSchema);
