import { Request, Response } from 'express';
import { asyncHandler, BadRequestError } from '../../../common';
import { Profile } from '../../../models/Profile';

export const getProfile = asyncHandler(async (req: Request, res: Response) => {
  const profile = await Profile.findOne({ userId: req.params.id });
  if (!profile) throw new BadRequestError('Profile not found');
  res.status(200).send(profile);
});
