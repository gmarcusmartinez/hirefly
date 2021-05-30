import { Request, Response } from 'express';
import { asyncHandler, BadRequestError } from '../../../common';
import { Applicant } from '../../../models/Applicant';

export const getApplicant = asyncHandler(
  async (req: Request, res: Response) => {
    const applicant = await Applicant.findOne({ userId: req.params.id });
    if (!applicant) throw new BadRequestError('Profile not found');
    res.status(200).send(applicant);
  }
);
