import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../../app';
import {
  fakeApplicantCookie,
  fakeRecruiterCookie,
} from '../../../test/auth-helper';

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
      .set('Cookie', fakeApplicantCookie());
    expect(response.status).not.toEqual(401);
  });
});

describe('Unsuccessfull Job Fetch: Job Does not exist', () => {
  const fakeid = mongoose.Types.ObjectId().toHexString();
  it('returns a 400 response.', async () => {
    const response = await request(app)
      .get(`/api/jobs/${fakeid}`)
      .set('Cookie', fakeApplicantCookie())
      .expect(400);
    expect(response.body.errors[0].message).toEqual('Job not found');
  });
});

describe('Successful Job Fetch', () => {
  const title = 'Node Js Backend Developer';
  const city = 'berlin';
  const country = 'germany';
  const minSalary = 42000;
  const maxSalary = 50000;
  const imgUrl = 'fakeimage.com';

  it('returns a 200', async () => {
    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeRecruiterCookie())
      .send({ title, city, country, minSalary, maxSalary, imgUrl })
      .expect(201);

    const res = await request(app)
      .get(`/api/jobs/${body._id}`)
      .set('Cookie', fakeApplicantCookie())
      .expect(200);
    expect(res.body).toBeDefined();
  });
});
