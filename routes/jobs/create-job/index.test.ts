import request from 'supertest';
import { app } from '../../../app';
import { fakeAuthCookie } from '../../../test/auth-helper';

describe('Route Access', () => {
  it('has a route handler listening to /api/jobs for post requests', async () => {
    const response = await request(app).post('/api/jobs').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    const response = await request(app).post('/api/jobs').send({}).expect(401);
    const errMsg = 'Not Authorized';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

describe('Unsuccesfull Job Creation', () => {
  const title = 'Node Js Backend Developer';
  const description = 'lorem ipsum';
  const location = 'Berlin';
  const salary = 50000;
  const imgUrl = 'fakeimage.com';
  const skills = 'nodejs, react, javascript';

  it('returns a 400 w/ no title is provided', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title: '', description, location, salary, imgUrl, skills })
      .expect(400);

    const errMsg = 'Title field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ no location is provided', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, description, location: '', salary, imgUrl, skills })
      .expect(400);

    const errMsg = 'Location field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ no salary is provided', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, description, location, salary: '', imgUrl, skills })
      .expect(400);

    const errMsg = 'Salary field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ salary is not of type number', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, description, location, salary: '50,000', imgUrl, skills })
      .expect(400);

    const errMsg = 'Salary must be of type number.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Succesfull Job Creation', () => {
  const title = 'Node Js Backend Developer';
  const description = 'lorem ipsum';
  const location = 'Berlin';
  const salary = 50000;
  const imgUrl = 'fakeimage.com';
  const skills = 'nodejs, react, javascript';
  const duration = 2;

  it('returns a 201', async () => {
    const { body } = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, description, location, salary, imgUrl, skills, duration })
      .expect(201);
  });
});
