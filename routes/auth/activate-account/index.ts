import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Applicant } from '../../../models/Applicant';
import { AccountStatus, User } from '../../../models/User';

export const activateAccount = async (req: Request, res: Response) => {
  const user = await User.findById(req.currentUser!._id);
  if (!user) throw new BadRequestError('User not found');
  let profile;

  if (user.accountType === 'applicant') {
    profile = await Applicant.findOne({ userId: user._id });
  }

  const errMsg = 'User must have associated profile before activating account.';
  if (!profile) throw new BadRequestError(errMsg);

  user.accountStatus = AccountStatus.active;
  await user.save();

  res.status(200).send({ accountStatus: user.accountStatus });
};
