import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../../app';
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

describe('Unsuccessfull Job Fetch: Job Does not exist', () => {
  const fakeid = mongoose.Types.ObjectId().toHexString();
  it('returns a 400 response.', async () => {
    const response = await request(app)
      .get(`/api/jobs/${fakeid}`)
      .set('Cookie', fakeAuthCookie())
      .expect(400);
    expect(response.body.errors[0].message).toEqual('Job not found');
  });
});

describe('Successful Job Fetch', () => {
  const title = 'Node Js Backend Developer';
  const description = 'lorem ipsum';
  const location = 'Berlin, Germany';
  const salary = 50000;

  it('returns a 200', async () => {
    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, description, location, salary })
      .expect(201);

    const res = await request(app)
      .get(`/api/jobs/${body._id}`)
      .set('Cookie', fakeAuthCookie())
      .expect(200);
    expect(res.body).toBeDefined();
  });
});
