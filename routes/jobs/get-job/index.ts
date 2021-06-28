import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Job } from '../../../models/Job';

export const getJob = async (req: Request, res: Response) => {
  const job = await Job.findById(req.params.id);
  if (!job) throw new BadRequestError('Job not found');
  res.send(job);
};
