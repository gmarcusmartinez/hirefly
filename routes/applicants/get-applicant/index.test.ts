import request from 'supertest';
import { app } from '../../../app';
import mongoose from 'mongoose';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/applicants/:id for get requests', async () => {
    const response = await request(app).get('/api/applicants/:id');
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app).get('/api/applicants/:id').expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/applicants/:id')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

describe('Applicant Not Found', () => {
  it('Returns a 404 if the applicant is not found', async () => {
    const response = await request(app)
      .get(`/api/applicant/${new mongoose.Types.ObjectId().toHexString()}`)
      .set('Cookie', fakeAuthCookie());
    expect(response.status).toEqual(404);
  });
});

describe('Applicant is Found', () => {
  // it('Returns a 404 if the applicant is not found', async () => {
  //   const response = await request(app)
  //     .get(`/api/applicant/${id}`)
  //     .set('Cookie', fakeAuthCookie());
  //   expect(response.status).toEqual(404);
  // });
});
