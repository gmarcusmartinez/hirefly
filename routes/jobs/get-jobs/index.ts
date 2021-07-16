import { Request, Response } from 'express';
import { Application } from '../../../models/Application';
import { Job } from '../../../models/Job';
import { User } from '../../../models/User';

export const getJobs = async (req: Request, res: Response) => {
  const currentUser = req.currentUser!._id;

  const applications = await Application.find({ applicant: currentUser });
  const applicationJobIds = applications.map(({ jobId }) => jobId);

  // necessary for $match : { creator: ... }
  const user = await User.findById(currentUser);

  const jobs = await Job.aggregate([
    { $match: { _id: { $nin: applicationJobIds } } },
    { $match: { creator: { $ne: user!._id } } },
  ]).sample(10);

  res.send(jobs);
};
