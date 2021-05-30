import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Applicant } from '../../../models/Applicant';
import { AccountStatus, User } from '../../../models/User';

export const createApplicant = async (req: Request, res: Response) => {
  const userId = req.currentUser!._id;

  if (req.currentUser!.accountType !== 'applicant')
    throw new NotAuthorizedError();

  const existingApplicant = await Applicant.findOne({ userId });
  const msg = 'If you would like to modify your profile please update it.';
  if (existingApplicant) throw new BadRequestError(msg);

  const applicant = Applicant.build({ ...req.body, userId });
  await applicant.save();

  const user = await User.findById(userId);
  user!.accountStatus = AccountStatus.active;
  await user!.save();

  res.status(201).send({});
};
