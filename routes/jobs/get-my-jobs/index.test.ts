import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../../app';
import { Job } from '../../../models/Job';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/jobs/my-jobs for get requests', async () => {
    const response = await request(app).get('/api/jobs/my-jobs');
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app).get('/api/jobs/my-jobs').expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .get('/api/jobs/my-jobs')
      .set('Cookie', fakeAuthCookie());
    expect(response.status).not.toEqual(401);
  });
});

describe('Successfull My Jobs Fetch', () => {
  const recruiter = fakeAuthCookie();
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

    await request(app)
      .post('/api/jobs')
      .set('Cookie', recruiter)
      .send({ title, description, location, salary, imgUrl })
      .expect(201);
  });

  it('will return 1 job, which the current user has created', async () => {
    const response = await request(app)
      .get('/api/jobs/my-jobs')
      .set('Cookie', recruiter)
      .expect(200);
    expect(response.body.length).toEqual(1);
  });

  it('will return 3 jobs total, 2 of which the current user has not created', async () => {
    const response = await request(app)
      .get('/api/jobs')
      .set('Cookie', recruiter)
      .expect(200);
    expect(response.body.length).toEqual(3);
  });
});
