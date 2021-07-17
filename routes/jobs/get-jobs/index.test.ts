import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../../app';
import { Job } from '../../../models/Job';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/jobs for get requests', async () => {
    const response = await request(app).get('/api/jobs');
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app).get('/api/jobs').send({}).expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .get('/api/jobs')
      .set('Cookie', fakeAuthCookie());
    expect(response.status).not.toEqual(401);
  });
});

describe('Successfull Jobs Fetch', () => {
  beforeEach(async () => {
    const title = 'Node Js Backend Developer';
    const description = 'lorem ipsum';
    const location = 'Berlin';
    const salary = 50000;
    const creator = mongoose.Types.ObjectId().toHexString();
    const imgUrl = 'fakeimage.com';

    const job1 = new Job({
      title,
      description,
      location,
      salary,
      creator,
      imgUrl,
    });
    const job2 = new Job({
      title,
      description,
      location,
      salary,
      creator,
      imgUrl,
    });
    await job1.save();
    await job2.save();
  });

  it('will return 2 jobs', async () => {
    const response = await request(app)
      .get('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .expect(200);
    expect(response.body.length).toEqual(2);
  });
});
