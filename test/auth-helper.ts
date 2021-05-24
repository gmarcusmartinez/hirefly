import request from 'supertest';
import { app } from '../app';

export const mockApplicantToken = async (email: string) => {
  const res = await request(app).post('/api/auth/signup').send({
    email,
    password: 'password',
    accountType: 'applicant',
  });
  const { token, id } = res.body;
  return { token, id };
};
