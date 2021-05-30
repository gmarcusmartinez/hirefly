import request from 'supertest';
import { app } from '../../../app';
import { AccountStatus } from '../../../models/User';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Unsuccessfull Aaccount Activation: no token', () => {
  it('returns a 401 when no cookie set in request headers', async () => {
    const response = await request(app)
      .put('/api/auth/activate-account')
      .expect(401);

    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

// describe('Unsuccessfull Aaccount Activation: no profile associated with user', () => {
//   it('returns a 400 when no profile found', async () => {
//     const response = await request(app)
//       .put('/api/auth/activate-account')
//       .set('Cookie', fakeAuthCookie())
//       .expect(400);

//     const errMsg =
//       'User must have associated profile before activating account.';
//     expect(response.body.errors[0].message).toBe(errMsg);
//   });
// });

describe('Successfull Account Activation', () => {
  it('returns a 200 when users cookie is set in request headers and profile linked to req.currentUser', async () => {
    const avatar = 'test@test.com';
    const firstName = 'Marcus';
    const lastName = 'Martinez';
    const period = 'Full-Time';
    const position = 'backend developer';

    const cookie = fakeAuthCookie();
    await request(app)
      .post('/api/applicants')
      .set('Cookie', cookie)
      .send({ firstName, lastName, avatar, period, position })
      .expect(201);

    const response = await request(app)
      .put('/api/auth/activate-account')
      .set('Cookie', cookie)
      .expect(200);

    expect(response.body.accountStatus).toBe(AccountStatus.active);
  });
});
