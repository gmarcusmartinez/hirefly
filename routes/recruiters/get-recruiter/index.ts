import { Request, Response } from 'express';
import { asyncHandler, BadRequestError } from '../../../common';
import { Recruiter } from '../../../models/Recruiter';

export const getRecruiter = asyncHandler(
  async (req: Request, res: Response) => {
    const recruiter = await Recruiter.findOne({ userId: req.params.id });
    if (!recruiter) throw new BadRequestError('Profile not found');
    res.status(200).send(recruiter);
  }
);
