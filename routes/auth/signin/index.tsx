import { Request, Response } from 'express';
import { BadRequestError, asyncHandler } from '../../../common';
import { User } from '../../../models/User';
import { PasswordManager } from '../../../services/PasswordManager';

export const signin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new BadRequestError('Invalid Credentials');

  const passwordsMatch = await PasswordManager.compare(user.password, password);
  if (!passwordsMatch) throw new BadRequestError('Invalid Credentials');

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(200).send({});
});
