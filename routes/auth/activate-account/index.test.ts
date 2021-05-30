import request from 'supertest';
import { app } from '../../../app';

describe('Unsuccessfull Aaccount Activation: no token', () => {
  it('returns a 401 when no cookie set in request headers', async () => {
    const response = await request(app)
      .put('/api/auth/activate-account')
      .expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});
