import { Request, Response } from 'express';
import { Application } from '../../../models/Application';
import { Job } from '../../../models/Job';

export const getJobs = async (req: Request, res: Response) => {
  const applications = await Application.find({
    applicant: req.currentUser!._id,
  });
  const applicationJobIds = applications.map(({ jobId }) => jobId);

  const jobs = await Job.aggregate([
    { $match: { _id: { $nin: applicationJobIds } } },
    { $match: { creator: { $ne: req.currentUser!._id } } },
  ]).sample(10);

  res.send(jobs);
};
