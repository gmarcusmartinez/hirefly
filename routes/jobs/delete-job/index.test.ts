import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

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
  const description = 'lorem ipsum';
  const location = 'Berlin';
  const salary = 50000;
  const imgUrl = 'fakeimage.com';

  it('returns a 401', async () => {
    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, description, location, salary, imgUrl })
      .expect(201);

    await request(app)
      .delete(`/api/jobs/${body._id}`)
      .set('Cookie', fakeAuthCookie())
      .expect(401);
  });
});

describe('Successful Job Deletion', () => {
  const title = 'Node Js Backend Developer';
  const description = 'lorem ipsum';
  const location = 'Berlin';
  const salary = 50000;
  const imgUrl = 'fakeimage.com';

  const user = fakeAuthCookie();
  it('returns a 201', async () => {
    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', user)
      .send({ title, description, location, salary, imgUrl })
      .expect(201);

    await request(app)
      .delete(`/api/jobs/${body._id}`)
      .set('Cookie', user)
      .expect(202);
  });
});
