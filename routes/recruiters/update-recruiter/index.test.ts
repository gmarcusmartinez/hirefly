import request from 'supertest';
import { app } from '../../../app';
import { fakeRecruiterCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/recruiters for post requests', async () => {
    const response = await request(app).put('/api/recruiters').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is authenticated', async () => {
    const response = await request(app)
      .put('/api/recruiters')
      .send({})
      .expect(401);

    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is authenticated', async () => {
    const response = await request(app)
      .put('/api/recruiters')
      .set('Cookie', fakeRecruiterCookie())
      .send({});
    expect(response.status).not.toEqual(401);
    expect(response.status).toEqual(400);
  });
});

describe('Unsuccessful Profile Update: Profile does not exist', () => {
  it('returns a 400 w/ when no profile exists for the user', async () => {
    const avatar = 'fakeimg.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const company = 'Big Dogs inc.';

    const response = await request(app)
      .put('/api/recruiters')
      .set('Cookie', fakeRecruiterCookie())
      .send({ firstName, lastName, avatar, company })
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
    const accountType = 'recruiter';

    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email, password, accountType })
      .expect(201);

    // Create Profile
    const avatar = 'fakeimg.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const company = 'Big Dogs inc.';

    const cookie = res.header['set-cookie'][0];
    await request(app)
      .post('/api/recruiters')
      .set('Cookie', cookie)
      .send({ firstName, lastName, avatar, company })
      .expect(201);

    await request(app)
      .put('/api/recruiters')
      .set('Cookie', cookie)
      .send({
        firstName: 'Updated First name',
        lastName,
        avatar,
        company,
      })
      .expect(204);
  });
});
