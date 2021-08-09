import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie, fakeRecruiterCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/jobs for delete requests', async () => {
    const response = await request(app).delete('/api/jobs/:id').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .delete('/api/jobs/:id')
      .send({})
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Unsuccessful Job Deletion: User is not Job Creator', () => {
  const title = 'Node Js Backend Developer';
  const city = 'berlin';
  const country = 'germany';
  const minSalary = 42000;
  const maxSalary = 50000;
  const imgUrl = 'fakeimage.com';

  it('returns a 401', async () => {
    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeRecruiterCookie())
      .send({ title, city, country, minSalary, maxSalary, imgUrl })
      .expect(201);

    await request(app)
      .delete(`/api/jobs/${body._id}`)
      .set('Cookie', fakeRecruiterCookie())
      .expect(401);
  });
});

describe('Successful Job Deletion', () => {
  const recruiter = fakeAuthCookie();

  const title = 'Node Js Backend Developer';
  const city = 'berlin';
  const country = 'germany';
  const minSalary = 42000;
  const maxSalary = 50000;
  const imgUrl = 'fakeimage.com';

  it('returns a 401', async () => {
    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', recruiter)
      .send({ title, city, country, minSalary, maxSalary, imgUrl })
      .expect(201);

    await request(app)
      .delete(`/api/jobs/${body._id}`)
      .set('Cookie', recruiter)
      .expect(202);
  });
});
