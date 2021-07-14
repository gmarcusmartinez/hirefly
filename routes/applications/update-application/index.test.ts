import request from 'supertest';
import { app } from '../../../app';
import { StatusEnum } from '../../../models/Application';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/applications for put requests', async () => {
    const response = await request(app).put('/api/applications/:id').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .put('/api/applications/:id')
      .send({})
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .put('/api/applications/:id')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).toEqual(400);
  });
});

describe('Unsuccessfull Application Update', () => {
  it('returns a 401 if the user updating the application is not the job creator', async () => {
    const recruiter = fakeAuthCookie();
    const applicant = fakeAuthCookie();

    // Recruiter Creates Job
    const title = 'Node Js Backend Developer';
    const description = 'lorem ipsum';
    const location = 'Berlin, Germany';
    const salary = 50000;
    const imgUrl = 'fakeimage.com';

    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', recruiter)
      .send({ title, description, location, salary, imgUrl })
      .expect(201);

    // Applicant Applies For Job
    const res = await request(app)
      .post('/api/applications')
      .set('Cookie', applicant)
      .send({ jobId: body._id })
      .expect(201);

    // Applicant tries to update his own applcation documnet
    const response = await request(app)
      .put(`/api/applications/${res.body._id}`)
      .set('Cookie', applicant)
      .send({ status: StatusEnum.accepted })
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Successfull Application Update', () => {
  it('returns a 204 if the user updating the application job creator', async () => {
    const recruiter = fakeAuthCookie();
    const applicant = fakeAuthCookie();

    // Recruiter Creates Job
    const title = 'Node Js Backend Developer';
    const description = 'lorem ipsum';
    const location = 'Berlin, Germany';
    const salary = 50000;
    const imgUrl = 'fakeimage.com';

    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', recruiter)
      .send({ title, description, location, salary, imgUrl })
      .expect(201);

    // Applicant Applies For Job
    const res = await request(app)
      .post('/api/applications')
      .set('Cookie', applicant)
      .send({ jobId: body._id })
      .expect(201);

    // Recruiter updates applcation documnet to accepted
    const doc = await request(app)
      .put(`/api/applications/${res.body._id}`)
      .set('Cookie', recruiter)
      .send({ status: StatusEnum.accepted });

    expect(doc.body.status).toBe(StatusEnum.accepted);
  });
});
