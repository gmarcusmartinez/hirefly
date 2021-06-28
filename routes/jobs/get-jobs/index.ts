import { Request, Response } from 'express';
import { Job } from '../../../models/Job';

export const getJobs = async (req: Request, res: Response) => {
  const jobs = await Job.find({ _id: { $ne: req.currentUser!._id } });
  res.send(jobs);
};
