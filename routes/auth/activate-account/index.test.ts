import request from 'supertest';
import { app } from '../../../app';

describe('Unsuccessfull Account Activation: no token', () => {
  it('returns a 401 when no cookie set in request headers', async () => {
    const response = await request(app)
      .put('/api/auth/activate-account')
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successful Account Activation', () => {
  it('returns a 200', async () => {
    const email = 'test@test.com';
    const password = 'thisisatest';

    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email, password })
      .expect(201);
    const cookie = res.header['set-cookie'][0];

    const avatar = 'test@test.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const period = 'full-time';
    const position = 'backend';

    await request(app)
      .post('/api/profiles')
      .set('Cookie', cookie)
      .send({ firstName, lastName, avatar, period, position })
      .expect(201);

    await request(app)
      .put('/api/auth/activate-account')
      .set('Cookie', cookie)
      .expect(200);
  });
});
