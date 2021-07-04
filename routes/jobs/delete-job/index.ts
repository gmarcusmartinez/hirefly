import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Job } from '../../../models/Job';

export const deleteJob = async (req: Request, res: Response) => {
  const job = await Job.findById(req.params.id);
  if (!job) throw new BadRequestError('Job not found');

  const match = job.creator.toString() === req.currentUser?._id;
  if (!match) throw new NotAuthorizedError();

  await Job.findByIdAndDelete(job._id);
  res.status(202).send({ msg: 'Success' });
};
