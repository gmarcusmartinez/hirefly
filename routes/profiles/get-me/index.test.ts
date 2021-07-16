import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/profiles/me for get requests', async () => {
    const response = await request(app).get('/api/profiles/:id');
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app).get('/api/profiles/me').expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/profiles/me')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

describe('My Profile Found', () => {
  it('Returns a 200 if the profile is found', async () => {
    // Create User
    const email = 'test@test.com';
    const password = 'thisisatest';
    const { header } = await request(app)
      .post('/api/auth/signup')
      .send({ email, password })
      .expect(201);

    const imgUrl = 'test@test.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const period = 'full-time';
    const position = 'backend';
    const cookie = header['set-cookie'][0];

    // Associate Profile
    const response = await request(app)
      .post('/api/profiles')
      .set('Cookie', cookie)
      .send({ firstName, lastName, imgUrl, period, position })
      .expect(201);

    //Fetch Profile
    const res = await request(app)
      .get(`/api/profiles/me`)
      .set('Cookie', cookie)
      .expect(200);
    expect(res.body.userId).toBe(response.body.userId);
  });
});
