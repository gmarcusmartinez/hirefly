import { Request, Response } from 'express';
import {
  asyncHandler,
  BadRequestError,
  NotAuthorizedError,
} from '../../../common';
import { Applicant } from '../../../models/Applicant';

export const createApplicant = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.currentUser!._id;

    if (req.currentUser!.accountType !== 'applicant')
      throw new NotAuthorizedError();

    const existingApplicant = await Applicant.findOne({ userId });
    const msg = 'If you would like to modify your profile please update it.';
    if (existingApplicant) throw new BadRequestError(msg);

    const applicant = Applicant.build({ ...req.body, userId });
    await applicant.save();
    res.status(201).send({});
  }
);
