import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Profile } from '../../../models/Profile';

export const createProfile = async (req: Request, res: Response) => {
  const userId = req.currentUser!._id;

  const existingProfile = await Profile.findOne({ userId });
  const msg = 'If you would like to modify your profile please update it.';
  if (existingProfile) throw new BadRequestError(msg);

  const profile = Profile.build({ ...req.body, userId });
  await profile.save();

  res.status(201).send({});
};
