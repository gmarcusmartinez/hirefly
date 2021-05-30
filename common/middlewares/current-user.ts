import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import keys from '../../config/keys';

interface UserPayload {
  _id: string;
  email: string;
  accountType: string;
  accountStatus: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  const key = keys.jwtSecret!;

  try {
    const payload = jwt.verify(req.session.jwt, key) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
