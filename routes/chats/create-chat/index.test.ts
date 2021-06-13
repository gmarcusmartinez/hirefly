import request from 'supertest';
import { app } from '../../../app';
import mongoose from 'mongoose';
import { User } from '../../../models/User';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/chats for post requests', async () => {
    const response = await request(app).post('/api/chats').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app).post('/api/chats').send({}).expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/chats')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

describe('Unsuccessful Chat Creation', () => {
  it('returns a 400 w/ no partner id provided', async () => {
    const response = await request(app)
      .post('/api/chats')
      .set('Cookie', fakeAuthCookie())
      .send({ partnerId: '' })
      .expect(400);

    const errMsg = 'Partner field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successful Chat Creation', () => {
  it('Should Create a chat document', async () => {
    const password = 'password';

    // Create User
    const user = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'user@test.com', password })
      .expect(201);

    // Create Chat Partner
    const _id = new mongoose.Types.ObjectId().toHexString();
    const partner = new User({
      _id,
      email: 'partner@test.com',
      password: 'somefakepassword',
    });

    await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId: partner._id })
      .expect(201);

    const res = await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId: partner._id })
      .expect(400);

    const msg = 'You already have a chat with this user';
    expect(res.body.errors[0].message).toBe(msg);
  });
});
