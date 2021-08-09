import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Profile } from '../../../models/Profile';

export const updateProfile = async (req: Request, res: Response) => {
  const userId = req.currentUser!._id;
  let profile;

  profile = await Profile.findOneAndUpdate(
    { userId },
    { ...req.body },
    { runValidators: true }
  );

  if (!profile) throw new BadRequestError('Profile not found');
  profile = await Profile.findOne({ userId });

  await profile!.save();
  res.send(profile);
};
