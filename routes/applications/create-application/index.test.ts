import request from 'supertest';
import { app } from '../../../app';
import {
  fakeApplicantCookie,
  fakeRecruiterCookie,
} from '../../../test/auth-helper';

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
      .set('Cookie', fakeApplicantCookie())
      .send({});
    expect(response.status).toEqual(400);
  });
});

describe('Unsuccessful Application Creation', () => {
  it('returns a 400 w/ no job id provided', async () => {
    const response = await request(app)
      .post('/api/applications')
      .set('Cookie', fakeApplicantCookie())
      .send({ job: '' })
      .expect(400);
    const errMsg = 'Job field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('e2e: Unsuccessfull Application Creation: Applicant is of account type Recruiter', () => {
  it('returns a 400', async () => {
    const recruiter = fakeRecruiterCookie();

    // Recruiter Creates Job
    const title = 'Node Js Backend Developer';
    const city = 'berlin';
    const country = 'germany';
    const minSalary = 42000;
    const maxSalary = 50000;
    const imgUrl = 'fakeimage.com';

    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeApplicantCookie())
      .send({ title, city, country, minSalary, maxSalary, imgUrl })
      .expect(201);

    // Recruiter Applies For Job
    const response = await request(app)
      .post('/api/applications')
      .set('Cookie', recruiter)
      .send({ jobId: body._id })
      .expect(400);
    const errMsg = 'You can not apply for jobs as recruiter account type.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successfull Application Creation', () => {
  it('returns a 201', async () => {
    const applicant = fakeApplicantCookie();

    // Recruiter Creates Job
    const title = 'Node Js Backend Developer';
    const city = 'berlin';
    const country = 'germany';
    const minSalary = 42000;
    const maxSalary = 50000;
    const imgUrl = 'fakeimage.com';

    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeRecruiterCookie())
      .send({ title, city, country, minSalary, maxSalary, imgUrl })
      .expect(201);

    // Applicant Creates Profile
    await request(app)
      .post('/api/profiles')
      .set('Cookie', applicant)
      .send({ firstName: 'Test', lastName: 'User', imgUrl: 'testimg.com' })
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
