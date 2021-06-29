import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Application, StatusEnum } from '../../../models/Application';
import { Job } from '../../../models/Job';

export const createApplication = async (req: Request, res: Response) => {
  const applicant = req.currentUser!._id;
  const { jobId } = req.body;

  const job = await Job.findById(jobId);
  if (!job) throw new BadRequestError('Job not found.');

  const msg = 'You can not apply for a job which you have created.';
  if (job!.creator.toString() === applicant) throw new BadRequestError(msg);

  const existingApplication = await Application.findOne({ applicant, jobId });
  const duplicate = 'You have already sent an application for this job.';
  if (existingApplication) throw new BadRequestError(duplicate);

  const application = Application.build({ applicant, jobId });
  application.status = StatusEnum.pending;
  application.jobCreator = job.creator;

  await application.save();
  res.status(201).send(application);
};
