import request from 'supertest';
import { app } from '../../../app';

describe('Route Access', () => {
  it('has a route handler listening to /api/auth/signin for post requests', async () => {
    const response = await request(app).post('/api/auth/signin').send({});
    expect(response.status).not.toEqual(404);
  });
});

describe('Unsuccessful Signin : invalid credentials', () => {
  const email = 'test@test.com';
  const password = 'password';
  const accountType = 'applicant';

  beforeEach(async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email, password, accountType });
  });

  it('returns a 400 w/ an incorrect password', async () => {
    const response = await request(app)
      .post('/api/auth/signin')
      .send({ email, password: 'invalidPassword' })
      .expect(400);
    const errMsg = 'Invalid Credentials';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ an incorrect email', async () => {
    const response = await request(app)
      .post('/api/auth/signin')
      .send({ email: 'wrongemail@test.com', password })
      .expect(400);
    const errMsg = 'Invalid Credentials';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ an invalid email', async () => {
    const response = await request(app)
      .post('/api/auth/signin')
      .send({ email: 'notanemail', password })
      .expect(400);
    const errMsg = 'Email must be valid.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successful Signin', () => {
  const email = 'test@test.com';
  const password = 'thisisatest';
  const accountType = 'applicant';

  it('returns  wa 200 w all/ valid inputs', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email, password, accountType })
      .expect(201);

    await request(app)
      .post('/api/auth/signin')
      .send({ email, password })
      .expect(200);
  });
});
