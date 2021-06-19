import { Request, Response } from 'express';
import { Job } from '../../../models/Job';

export const getJob = async (req: Request, res: Response) => {
  const job = await Job.find({ id: req.params.id });
  res.send(job);
};
