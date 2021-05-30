import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/applicants for post requests', async () => {
    const response = await request(app).post('/api/applicants').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .send({})
      .expect(401);

    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/applicants')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

// describe('Unsuccessful Profile Creation', () => {
//   const name = 'Test User';
//   const birthdate = '1989-09-15';
//   const imageUrl = 'test.com';

//   it('returns a 400 w/ invalid name', async () => {
//     const { token } = await mockToken();

//     const response = await request(app)
//       .post('/api/profiles')
//       .set('Authorization', `Bearer ${token}`)
//       .send({ name: '', birthdate, imageUrl })
//       .expect(400);

//     const errMsg = 'Name field can not be empty.';
//     expect(response.body.errors[0].message).toBe(errMsg);
//   });

//   it('returns a 400 when no birthdate is provided', async () => {
//     const { token } = await mockToken();

//     const response = await request(app)
//       .post('/api/profiles')
//       .set('Authorization', `Bearer ${token}`)
//       .send({ name, birthdate: '', imageUrl })
//       .expect(400);

//     const errMsg = 'Birthdate is required.';
//     expect(response.body.errors[0].message).toBe(errMsg);
//   });

//   it('returns a 400 when birthdate is not of type date', async () => {
//     const { token } = await mockToken();

//     const response = await request(app)
//       .post('/api/profiles')
//       .set('Authorization', `Bearer ${token}`)
//       .send({ name, birthdate: 'thisisnotadate', imageUrl })
//       .expect(400);

//     const errMsg = 'Birthdate must be of type date.';
//     expect(response.body.errors[0].message).toBe(errMsg);
//   });

//   it('returns a 400 when no imageUrl is provided', async () => {
//     const { token } = await mockToken();

//     const response = await request(app)
//       .post('/api/profiles')
//       .set('Authorization', `Bearer ${token}`)
//       .send({ name, birthdate, imageUrl: '' })
//       .expect(400);

//     const errMsg = 'Profile Image is required.';
//     expect(response.body.errors[0].message).toBe(errMsg);
//   });

//   it('returns a 400 if profile already exists', async () => {
//     const { token } = await mockToken();

//     await request(app)
//       .post('/api/profiles')
//       .set('Authorization', `Bearer ${token}`)
//       .send({ name, birthdate, imageUrl })
//       .expect(201);

//     const response = await request(app)
//       .post('/api/profiles')
//       .set('Authorization', `Bearer ${token}`)
//       .send({ name, birthdate, imageUrl })
//       .expect(400);

//     const errMsg = 'If you would like to modify your profile please update it.';
//     expect(response.body.errors[0].message).toBe(errMsg);
//   });
// });

// describe('Successful Profile Creattion', () => {
//   const name = 'Marcus Martinez';
//   const birthdate = '1989-09-15';
//   const imageUrl = 'fakeimage.com';

//   it('returns a 201 response with all valid inputs', async () => {
//     const { token } = await mockToken();
//     return request(app)
//       .post('/api/profiles')
//       .set('Authorization', `Bearer ${token}`)
//       .send({ name, birthdate, imageUrl })
//       .expect(201);
//   });
// });
