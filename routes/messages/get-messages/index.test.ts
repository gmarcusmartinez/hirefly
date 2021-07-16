import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/messages/:chatId for get requests', async () => {
    const response = await request(app).get('/api/messages/:chatId');
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .get('/api/messages/:chatId')
      .send({})
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Unsuccessful Message Fetch: User does not belong to chat', () => {
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

    // Create Chat
    chatResponse = await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId })
      .expect(201);
  });

  it('returns a 401 error', async () => {
    const res = await request(app)
      .get(`/api/messages/${chatResponse.body._id}`)
      .set('Cookie', fakeAuthCookie())
      .expect(401);
    expect(res.body.errors[0].message).toBe('Not Authorized');
  });
});

describe('Unsuccessful Message Fetch: User does not belong to chat', () => {
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

    // Create Chat
    chatResponse = await request(app)
      .post('/api/chats')
      .set('Cookie', user.header['set-cookie'][0])
      .send({ partnerId })
      .expect(201);
  });

  it('returns a 200 response', async () => {
    const res = await request(app)
      .get(`/api/messages/${chatResponse.body._id}`)
      .set('Cookie', partner.header['set-cookie'][0])
      .expect(200);
  });
});
