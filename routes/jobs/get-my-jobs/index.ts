import { Request, Response } from 'express';
import { Job } from '../../../models/Job';

export const getMyJobs = async (req: Request, res: Response) => {
  const jobs = await Job.find({ creator: req.currentUser!._id });
  res.send(jobs);
};
