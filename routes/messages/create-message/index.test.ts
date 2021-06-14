import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';
import mongoose from 'mongoose';

describe('Route Access', () => {
  it('has a route handler listening to /api/messages for post requests', async () => {
    const response = await request(app).post('/api/messages').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .post('/api/messages')
      .send({})
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/messages')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

describe('Unsuccessful message creation', () => {
  let user: { header: any };
  let partner: { header: any };
  let partnerId: string;
  let chatResponse: { body: { _id: string } };

  beforeEach(async () => {
    // Create User
    user = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'user@test.com', password: 'password' })
      .expect(201);

    // Create Chat Partner
    partner = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'partner@test.com', password: 'password' })
      .expect(201);

    // Create User Profile
    const avatar = 'fakeimg.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const period = 'full-time';
    const position = 'backend';

    await request(app)
      .post('/api/profiles')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ firstName, lastName, avatar, period, position })
      .expect(201);

    // Create Partner Profile
    const { body } = await request(app)
      .post('/api/profiles')
      .set('Cookie', partner.header['set-cookie'][0])
      .send({ firstName, lastName, avatar, period, position })
      .expect(201);

    partnerId = body.userId;

    // Create Chat
    chatResponse = await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId })
      .expect(201);
  });

  it('will return a 400 status if the chat does not exist', async () => {
    const content = 'This is some dummy content';

    const response = await request(app)
      .post('/api/messages')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ chatId: mongoose.Types.ObjectId().toHexString(), content })
      .expect(400);
    const errMsg = 'Chat not found';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('will return a 400 status if the chat id is empty', async () => {
    const content = 'This is some dummy content';
    const response = await request(app)
      .post('/api/messages')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ chatId: '', content })
      .expect(400);
    const errMsg = 'Chat id is required.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('will return a 400 status if the content field is empty', async () => {
    const response = await request(app)
      .post('/api/messages')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ chatId: chatResponse.body._id, content: '' })
      .expect(400);
    const errMsg = 'Message must contain content.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('will return a 400 status if the user does not belong to the chat', async () => {
    const maliciousUser = fakeAuthCookie();
    const content = 'This is some dummy content';

    const response = await request(app)
      .post('/api/messages')
      .set('Cookie', maliciousUser)
      .send({ chatId: chatResponse.body._id, content })
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Unsuccessful message creation', () => {
  let user: { header: any };
  let partner: { header: any };
  let partnerId: string;
  let chatResponse: { body: { _id: string } };

  beforeEach(async () => {
    // Create User
    user = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'user@test.com', password: 'password' })
      .expect(201);

    // Create Chat Partner
    partner = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'partner@test.com', password: 'password' })
      .expect(201);

    // Create User Profile
    const avatar = 'fakeimg.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const period = 'full-time';
    const position = 'backend';

    await request(app)
      .post('/api/profiles')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ firstName, lastName, avatar, period, position })
      .expect(201);

    // Create Partner Profile
    const { body } = await request(app)
      .post('/api/profiles')
      .set('Cookie', partner.header['set-cookie'][0])
      .send({ firstName, lastName, avatar, period, position })
      .expect(201);

    partnerId = body.userId;

    // Create Chat
    chatResponse = await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId })
      .expect(201);
  });

  it('will return a 201 if user belongs to chat and message has content', async () => {
    const content = 'This is some dummy content';

    await request(app)
      .post('/api/messages')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ chatId: chatResponse.body._id, content })
      .expect(201);
  });
});
