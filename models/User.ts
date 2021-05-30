import keys from '../config/keys';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { PasswordManager } from '../services/PasswordManager';

export enum AccountType {
  applicant = 'applicant',
  recruiter = 'recruiter',
}
export enum AccountStatus {
  uninitialized = 'uninitialized',
  active = 'active',
}

interface UserAttrs {
  email: string;
  password: string;
  accountType: AccountType;
}

interface UserDoc extends mongoose.Document {
  password: string;
  accountType: AccountType;
  accountStatus: AccountStatus;
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
      type: String,
      required: true,
      enum: Object.values(AccountType),
    },
    accountStatus: {
      type: String,
      required: true,
      default: AccountStatus.uninitialized,
      enum: Object.values(AccountStatus),
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
    {
      _id: this._id,
      accountType: this.accountType,
      accounStatus: this.accountStatus,
    },
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
