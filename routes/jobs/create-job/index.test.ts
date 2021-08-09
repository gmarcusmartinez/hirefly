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
  const city = 'berlin';
  const country = 'germany';
  const minSalary = 42000;
  const maxSalary = 50000;
  const imgUrl = 'fakeimage.com';

  it('returns a 400 w/ no title is provided', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title: '', city, country, minSalary, maxSalary, imgUrl })
      .expect(400);

    const errMsg = 'Title field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ no minSalary is provided', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, city: '', country, minSalary, maxSalary, imgUrl })
      .expect(400);

    const errMsg = 'City field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ no minSalary is provided', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, city, country, minSalary: '', maxSalary, imgUrl })
      .expect(400);

    const errMsg = 'Min field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 when minSalary is not a number', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, city, country, minSalary: 'notanum', maxSalary, imgUrl })
      .expect(400);

    const errMsg = 'Min Salary must be of type number.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ no maxSalary is provided', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, city, country, minSalary, maxSalary: '', imgUrl })
      .expect(400);

    const errMsg = 'Max field can not be empty.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 when maxSalary is not a number', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, city, country, minSalary, maxSalary: 'notanum', imgUrl })
      .expect(400);

    const errMsg = 'Max Salary must be of type number.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });

  it('returns a 400 w/ no imgUrl is provided', async () => {
    const response = await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, city, country, minSalary, maxSalary, imgUrl: '' })
      .expect(400);

    const errMsg = 'ImgUrl required.';
    expect(response.body.errors[0].message).toBe(errMsg);
  });
});

describe('Succesfull Job Creation', () => {
  const title = 'Node Js Backend Developer';
  const city = 'berlin';
  const country = 'germany';
  const minSalary = 42000;
  const maxSalary = 50000;
  const imgUrl = 'fakeimage.com';

  it('returns a 201', async () => {
    await request(app)
      .post('/api/jobs')
      .set('Cookie', fakeAuthCookie())
      .send({ title, city, country, minSalary, maxSalary, imgUrl })
      .expect(201);
  });
});
