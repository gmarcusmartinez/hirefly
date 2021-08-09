import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import keys from '../config/keys';
import { AccountType } from '../models/User';

export const fakeAuthCookie = () => {
  const payload = {
    _id: new mongoose.Types.ObjectId().toHexString(),
  };
  const token = jwt.sign(payload, keys.jwtSecret);
  const session = { jwt: token };
  const sessionJSON = JSON.stringify(session);
  const base64 = Buffer.from(sessionJSON).toString('base64');
  return [`express:sess=${base64}`];
};

export const fakeRecruiterCookie = () => {
  const payload = {
    _id: new mongoose.Types.ObjectId().toHexString(),
    accountType: AccountType.recruiter,
  };
  const token = jwt.sign(payload, keys.jwtSecret);
  const session = { jwt: token };
  const sessionJSON = JSON.stringify(session);
  const base64 = Buffer.from(sessionJSON).toString('base64');
  return [`express:sess=${base64}`];
};

export const fakeApplicantCookie = () => {
  const payload = {
    _id: new mongoose.Types.ObjectId().toHexString(),
    accountType: AccountType.applicant,
  };
  const token = jwt.sign(payload, keys.jwtSecret);
  const session = { jwt: token };
  const sessionJSON = JSON.stringify(session);
  const base64 = Buffer.from(sessionJSON).toString('base64');
  return [`express:sess=${base64}`];
};
