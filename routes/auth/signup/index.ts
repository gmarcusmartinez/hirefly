import { Request, Response } from 'express';
import { BadRequestError, asyncHandler } from '../../../common';
import { User } from '../../../models/User';

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  const msg = 'This email is currently registered to an active account.';
  if (existingUser) throw new BadRequestError(msg);

  const user = User.build({ email, password });
  await user.save();

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(201).send({});
});
