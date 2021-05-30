import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/applicants for post requests', async () => {
    const response = await request(app).post('/api/applicants').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .send({})
      .expect(401);

    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

describe('Unsuccessful Profile Creation', () => {
  const avatar = 'test@test.com';
  const firstName = 'Marcus';
  const lastName = 'Martinez';
  const period = 'Full-Time';
  const position = 'backend developer';

  it('returns a 400 w/ invalid firstName', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeAuthCookie())
      .send({ firstName: '', lastName, avatar, period, position })
      .expect(400);

    const errMsg = 'Please provide a first name.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ invalid lastName', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeAuthCookie())
      .send({ firstName, lastName: '', avatar, period, position })
      .expect(400);

    const errMsg = 'Please provide a last name.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ invalid avatar', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeAuthCookie())
      .send({ firstName, lastName, avatar: '', period, position })
      .expect(400);

    const errMsg = 'Please provide a profile Picture.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ blank period value', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeAuthCookie())
      .send({ firstName, lastName, avatar, period: '', position })
      .expect(400);

    const errMsg = 'Please select a period.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ invalid position value', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeAuthCookie())
      .send({ firstName, lastName, avatar, period, position: '' })
      .expect(400);

    const errMsg = 'Please select a position.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 if profile already exists', async () => {
    const avatar = 'test@test.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const period = 'Full-Time';
    const position = 'backend developer';
    const cookie = fakeAuthCookie();

    await request(app)
      .post('/api/applicants')
      .set('Cookie', cookie)
      .send({ firstName, lastName, avatar, period, position })
      .expect(201);

    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', cookie)
      .send({ firstName, lastName, avatar, period, position })
      .expect(400);

    const errMsg = 'If you would like to modify your profile please update it.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successful Profile Creattion', () => {
  const avatar = 'test@test.com';
  const firstName = 'Marcus';
  const lastName = 'Martinez';
  const period = 'Full-Time';
  const position = 'backend developer';

  it('returns a 201 w/ all valid inputs', async () => {
    const res = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeAuthCookie())
      .send({ firstName, lastName, avatar, period, position })
      .expect(201);
  });
});
