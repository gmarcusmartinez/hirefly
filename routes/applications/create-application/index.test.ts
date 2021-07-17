import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/applications for post requests', async () => {
    const response = await request(app).post('/api/applications').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .post('/api/applications')
      .send({})
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/applications')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).toEqual(400);
  });
});

describe('Unsuccessful Application Creation', () => {
  it('returns a 400 w/ no job id provided', async () => {
    const response = await request(app)
      .post('/api/applications')
      .set('Cookie', fakeAuthCookie())
      .send({ job: '' })
      .expect(400);
    const errMsg = 'Job field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Unsuccessfull Application Creation: Applicant is Job Creator', () => {
  it('returns a 400', async () => {
    const recruiter = fakeAuthCookie();

    // Recruiter Creates Job
    const title = 'Node Js Backend Developer';
    const description = 'lorem ipsum';
    const location = 'Berlin';
    const salary = 50000;
    const imgUrl = 'fakeimage.com';

    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', recruiter)
      .send({ title, description, location, salary, imgUrl })
      .expect(201);

    // Recruiter Applies For Job
    const response = await request(app)
      .post('/api/applications')
      .set('Cookie', recruiter)
      .send({ jobId: body._id })
      .expect(400);
    const errMsg = 'You can not apply for a job which you have created.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successfull Application Creation', () => {
  it('returns a 201', async () => {
    const recruiter = fakeAuthCookie();
    const applicant = fakeAuthCookie();

    // Recruiter Creates Job
    const title = 'Node Js Backend Developer';
    const description = 'lorem ipsum';
    const location = 'Berlin';
    const salary = 50000;
    const imgUrl = 'fakeimage.com';

    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', recruiter)
      .send({ title, description, location, salary, imgUrl })
      .expect(201);

    // Applicant Applies for Job
    await request(app)
      .post('/api/applications')
      .set('Cookie', applicant)
      .send({ jobId: body._id })
      .expect(201);

    const res = await request(app)
      .post('/api/applications')
      .set('Cookie', applicant)
      .send({ jobId: body._id })
      .expect(400);
    const errMsg = 'You have already sent an application for this job.';
    expect(res.body.errors[0].message).toBe(errMsg);
  });
});
