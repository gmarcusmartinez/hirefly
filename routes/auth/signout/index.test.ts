import request from 'supertest';
import { app } from '../../../app';

describe('Route Access', () => {
  it('has a route handler listening to /api/auth/signout for post requests', async () => {
    const response = await request(app).post('/api/auth/signout').send({});
    expect(response.status).not.toEqual(404);
  });
});
