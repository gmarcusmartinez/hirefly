import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import keys from '../config/keys';

export const fakeAuthCookie = () => {
  const payload = {
    _id: new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com',
  };

  const token = jwt.sign(payload, keys.jwtSecret);
  const session = { jwt: token };
  const sessionJSON = JSON.stringify(session);
  const base64 = Buffer.from(sessionJSON).toString('base64');
  return [`express:sess=${base64}`];
};
