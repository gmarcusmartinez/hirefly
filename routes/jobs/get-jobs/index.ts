import { Request, Response } from 'express';
import { Job } from '../../../models/Job';

export const getJobs = async (req: Request, res: Response) => {
  const jobs = await Job.find({});
  res.send(jobs);
};
