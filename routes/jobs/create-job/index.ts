import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Job } from '../../../models/Job';

export const createJob = async (req: Request, res: Response) => {
  const creator = req.currentUser!._id;
};
