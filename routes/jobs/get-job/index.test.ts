import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../../app';
import { Job } from '../../../models/Job';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/jobs/:id for get requests', async () => {
    const response = await request(app).get('/api/jobs/:id');
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app).get('/api/jobs/:id').expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .get('/api/jobs/:id')
      .set('Cookie', fakeAuthCookie());
    expect(response.status).not.toEqual(401);
  });
});
