import request from 'supertest';
import { app } from '../../../app';

describe('Route Access', () => {
  it('has a route handler listening to /api/auth/signup for post requests', async () => {
    const response = await request(app).post('/api/auth/signup').send({});
    expect(response.status).not.toEqual(404);
  });
});

describe('Unsuccessful Signup', () => {
  const email = 'test@test.com';
  const password = 'thisisatest';
  const accountType = 'applicant';

  it('returns a 400 w/ blank email', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email: '', password, accountType })
      .expect(400);

    expect(res.body.errors[0].message).toBe('Email required.');
  });

  it('returns a 400 w/ an invalid email', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'thisisnotanemail', password, accountType })
      .expect(400);

    expect(res.body.errors[0].message).toBe('Email must be valid.');
  });

  it('returns a 400 w/ blank password', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email, password: '', accountType })
      .expect(400);

    expect(res.body.errors[0].message).toBe('Password required.');
  });

  it('returns a 400 w/ blank accountType', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email, password, accountType: '' })
      .expect(400);

    expect(res.body.errors[0].message).toBe('Account Type required.');
  });
});

describe('Successful Signup', () => {
  const email = 'test@test.com';
  const password = 'thisisatest';
  const accountType = 'applicant';

  it('returns  wa 201 w all/ valid inputs', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ email, password, accountType })
      .expect(201);
  });
});
