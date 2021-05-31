import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Recruiter } from '../../../models/Recruiter';

export const createRecruiter = async (req: Request, res: Response) => {
  const userId = req.currentUser!._id;

  if (req.currentUser!.accountType !== 'recruiter')
    throw new NotAuthorizedError();

  const existingRecruiter = await Recruiter.findOne({ userId });
  const msg = 'If you would like to modify your profile please update it.';
  if (existingRecruiter) throw new BadRequestError(msg);

  const recruiter = Recruiter.build({ ...req.body, userId });
  await recruiter.save();

  res.status(201).send({});
};
