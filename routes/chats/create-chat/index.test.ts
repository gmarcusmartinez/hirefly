import request from 'supertest';
import { app } from '../../../app';
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

describe('Succesfull Chat Creation', () => {
  let user: { header: any };
  let partner: { header: any };
  let partnerId: string;
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
    const imgUrl = 'fakeimg.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const period = 'full-time';
    const position = 'backend';

    await request(app)
      .post('/api/profiles')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ firstName, lastName, imgUrl, period, position })
      .expect(201);

    // Create Partner Profile
    const { body } = await request(app)
      .post('/api/profiles')
      .set('Cookie', partner.header['set-cookie'][0])
      .send({ firstName, lastName, imgUrl, period, position })
      .expect(201);

    partnerId = body.userId;
  });

  it('Should Create a chat document', async () => {
    await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId })
      .expect(201);
  });
});

describe('Unsuccesfull Chat Creation', () => {
  it('returns a 400 w/ no partner id provided', async () => {
    const response = await request(app)
      .post('/api/chats')
      .set('Cookie', fakeAuthCookie())
      .send({ partnerId: '' })
      .expect(400);

    const errMsg = 'Partner field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('should not allow duplicate chats', async () => {
    // Create User
    const user = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'user@test.com', password: 'password' })
      .expect(201);

    // Create Chat Partner
    const partner = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'partner@test.com', password: 'password' })
      .expect(201);

    // Create User Profile
    const imgUrl = 'fakeimg.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const period = 'full-time';
    const position = 'backend';

    await request(app)
      .post('/api/profiles')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ firstName, lastName, imgUrl, period, position })
      .expect(201);

    // Create Partner Profile
    const { body } = await request(app)
      .post('/api/profiles')
      .set('Cookie', partner.header['set-cookie'][0])
      .send({ firstName, lastName, imgUrl, period, position })
      .expect(201);

    await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId: body.userId })
      .expect(201);

    await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId: body.userId })
      .expect(400);
  });
});
