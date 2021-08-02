import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Application } from '../../../models/Application';
import { Job } from '../../../models/Job';

export const getApplications = async (req: Request, res: Response) => {
  const job = await Job.findById(req.params.jobId);

  if (!job) throw new BadRequestError('Job not found');
  if (job.creator.toString() !== req.currentUser!._id)
    throw new NotAuthorizedError();

  const applications = await Application.find({
    jobId: job._id,
    status: 'pending',
  }).populate({
    path: 'applicantProfile',
    select: 'firstName lastName imgUrl city country skills bio',
  });

  res.status(200).send(applications);
};
