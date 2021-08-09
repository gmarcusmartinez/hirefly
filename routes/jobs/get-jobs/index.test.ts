import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../../app';
import { Job } from '../../../models/Job';
import { fakeApplicantCookie } from '../../../test/auth-helper';

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
      .set('Cookie', fakeApplicantCookie());
    expect(response.status).not.toEqual(401);
  });
});

describe('Successfull Jobs Fetch', () => {
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
  });

  it('will return 2 jobs', async () => {
    // Applicant creates account
    const res = await request(app).post('/api/auth/signup').send({
      email: 'test@test.com',
      password: 'password',
      accountType: 'applicant',
    });
    const cookie = res.header['set-cookie'][0];

    // Applicant creates profile
    await request(app)
      .post('/api/profiles')
      .set('Cookie', cookie)
      .send({ firstName: 'Test', lastName: 'User', imgUrl: 'testimg.com' })
      .expect(201);

    const { body } = await request(app)
      .get('/api/jobs')
      .set('Cookie', cookie)
      .expect(200);
    expect(body.length).toEqual(2);
  });
});
