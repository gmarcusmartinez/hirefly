import request from 'supertest';
import { app } from '../../../app';
import { fakeRecruiterCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/applicants for post requests', async () => {
    const response = await request(app).post('/api/recruiters').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .post('/api/recruiters')
      .send({})
      .expect(401);

    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeRecruiterCookie())
      .send({});
    expect(response.status).not.toEqual(401);
    expect(response.status).toEqual(400);
  });
});

describe('Unsuccessful Recruiter Creation', () => {
  const avatar = 'test@test.com';
  const firstName = 'Marcus';
  const lastName = 'Martinez';
  const company = 'Big Dogs inc.';

  it('returns a 400 w/ invalid firstName', async () => {
    const response = await request(app)
      .post('/api/recruiters')
      .set('Cookie', fakeRecruiterCookie())
      .send({ firstName: '', lastName, avatar, company })
      .expect(400);

    const errMsg = 'Please provide a first name.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ invalid lastName', async () => {
    const response = await request(app)
      .post('/api/recruiters')
      .set('Cookie', fakeRecruiterCookie())
      .send({ firstName, lastName: '', avatar, company })
      .expect(400);

    const errMsg = 'Please provide a last name.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ invalid avatar', async () => {
    const response = await request(app)
      .post('/api/recruiters')
      .set('Cookie', fakeRecruiterCookie())
      .send({ firstName, lastName, avatar: '', company })
      .expect(400);

    const errMsg = 'Please provide a profile Picture.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ blank company value', async () => {
    const response = await request(app)
      .post('/api/recruiters')
      .set('Cookie', fakeRecruiterCookie())
      .send({ firstName, lastName, avatar, comany: '' })
      .expect(400);

    const errMsg = 'Please provide a company.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 if profile already exists', async () => {
    const cookie = fakeRecruiterCookie();

    await request(app)
      .post('/api/recruiters')
      .set('Cookie', cookie)
      .send({ firstName, lastName, avatar, company })
      .expect(201);

    const response = await request(app)
      .post('/api/recruiters')
      .set('Cookie', cookie)
      .send({ firstName, lastName, avatar, company })
      .expect(400);

    const errMsg = 'If you would like to modify your profile please update it.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successful Recruiter Creattion', () => {
  it('returns a 201 w/ all valid inputs', async () => {
    const email = 'test@test.com';
    const password = 'thisisatest';
    const accountType = 'recruiter';

    const res = await request(app)
      .post('/api/auth/signup')
      .send({ email, password, accountType })
      .expect(201);

    const avatar = 'test@test.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const company = 'Big Dogs inc.';

    const cookie = res.header['set-cookie'][0];

    await request(app)
      .post('/api/recruiters')
      .set('Cookie', cookie)
      .send({ firstName, lastName, avatar, company })
      .expect(201);
  });
});
