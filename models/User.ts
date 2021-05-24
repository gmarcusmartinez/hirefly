import keys from '../config/keys';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { PasswordManager } from '../services/PasswordManager';

export enum AccountType {
  applicant = 'applicant',
  recruiter = 'recruiter',
}

interface UserAttrs {
  email: string;
  password: string;
  accountType: AccountType;
}

interface UserDoc extends mongoose.Document {
  password: string;
  accountType: AccountType;
  getSignedJwtToken(): string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema<UserDoc>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountType: {
      type: AccountType,
      required: true,
      enum: Object.values(AccountType),
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => new User(attrs);

userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    { id: this._id, accountType: this.accountType },
    keys.jwtSecret
  );
};

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await PasswordManager.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);
export { User };
