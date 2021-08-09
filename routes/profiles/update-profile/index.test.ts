import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/profiles for post requests', async () => {
    const response = await request(app).put('/api/profiles').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is authenticated', async () => {
    const response = await request(app)
      .put('/api/profiles')
      .send({})
      .expect(401);

    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is authenticated', async () => {
    const response = await request(app)
      .put('/api/profiles')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
    expect(response.status).toEqual(400);
  });
});

describe('Unsuccessful Profile Update: Profile does not exist', () => {
  it('returns a 400 w/ when no profile exists for the user', async () => {
    const imgUrl = 'test@test.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';

    const response = await request(app)
      .put('/api/profiles')
      .set('Cookie', fakeAuthCookie())
      .send({ firstName, lastName, imgUrl })
      .expect(400);

    const errMsg = 'Profile not found';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successful Profile Update', () => {
  it('returns a 201 w/ all valid inputs', async () => {
    // Create User
    const email = 'test@test.com';
    const password = 'thisisatest';

    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email, password })
      .expect(201);

    // Create Profile
    const imgUrl = 'test@test.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';

    const cookie = res.header['set-cookie'][0];
    await request(app)
      .post('/api/profiles')
      .set('Cookie', cookie)
      .send({ firstName, lastName, imgUrl })
      .expect(201);

    const { body } = await request(app)
      .put('/api/profiles')
      .set('Cookie', cookie)
      .send({
        firstName: 'Updated First name',
        lastName,
        imgUrl,
      })
      .expect(200);

    expect(body.firstName).toBe('Updated First name');
  });
});
