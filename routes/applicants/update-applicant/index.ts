import { Request, Response } from 'express';
import { NotAuthorizedError, BadRequestError } from '../../../common';
import { Applicant } from '../../../models/Applicant';

export const updateApplicant = async (req: Request, res: Response) => {
  const userId = req.currentUser!._id;
  let profile;

  profile = await Applicant.findOneAndUpdate(
    { userId },
    { ...req.body },
    { runValidators: true }
  );

  if (!profile) throw new BadRequestError('Profile not found');
  if (profile.userId.toString() !== userId.toString()) {
    throw new NotAuthorizedError();
  }

  profile = await Applicant.findOne({ userId });

  res.status(201).send({ profile });
};
