import { rest } from 'msw';

const base = `http://localhost:5000`;

export const handlers = [
  rest.post(`${base}/auth/signin`, (req, res, ctx) => {
    return res(ctx.json({}));
  }),
];
