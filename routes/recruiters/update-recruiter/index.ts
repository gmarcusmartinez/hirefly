import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Recruiter } from '../../../models/Recruiter';

export const updateRecruiter = async (req: Request, res: Response) => {
  const userId = req.currentUser!._id;
  let profile;

  profile = await Recruiter.findOneAndUpdate(
    { userId },
    { ...req.body },
    { runValidators: true }
  );

  if (!profile) throw new BadRequestError('Profile not found');
  profile = await Recruiter.findOne({ userId });

  res.status(204).send({ profile });
};
