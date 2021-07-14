import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/applications for post requests', async () => {
    const response = await request(app).get('/api/applications').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .get('/api/applications')
      .send({})
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});
