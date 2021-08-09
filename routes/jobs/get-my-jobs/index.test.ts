import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../../app';
import { Job } from '../../../models/Job';
import { fakeAuthCookie, fakeRecruiterCookie } from '../../../test/auth-helper';

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
  const recruiter = fakeRecruiterCookie();
  beforeEach(async () => {
    const title = 'Node Js Backend Developer';
    const city = 'berlin';
    const country = 'germany';
    const minSalary = 42000;
    const maxSalary = 50000;
    const imgUrl = 'fakeimage.com';
    const creator = mongoose.Types.ObjectId().toHexString();

    const job1 = new Job({
      title,
      city,
      country,
      minSalary,
      maxSalary,
      creator,
      imgUrl,
    });

    const job2 = new Job({
      title,
      city,
      country,
      minSalary,
      maxSalary,
      creator,
      imgUrl,
    });
    await job1.save();
    await job2.save();

    await request(app)
      .post('/api/jobs')
      .set('Cookie', recruiter)
      .send({ title, city, country, minSalary, maxSalary, imgUrl })
      .expect(201);
  });

  it('will return 1 job, which the current user has created', async () => {
    const response = await request(app)
      .get('/api/jobs/my-jobs')
      .set('Cookie', recruiter)
      .expect(200);
    expect(response.body.length).toEqual(1);
  });
});
