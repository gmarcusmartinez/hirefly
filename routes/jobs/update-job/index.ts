import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Job } from '../../../models/Job';

export const updateJob = async (req: Request, res: Response) => {
  let job;
  job = await Job.findById(req.params.id);
  if (!job) throw new BadRequestError('Job not found');

  const match = job.creator.toString() === req.currentUser?._id;
  if (!match) throw new NotAuthorizedError();

  const opts = { new: true };
  job = await Job.findOneAndUpdate({ _id: job._id }, { ...req.body }, opts);

  await job!.save();
  res.send(job);
};
