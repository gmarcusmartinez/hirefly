import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Application, StatusEnum } from '../../../models/Application';
import { Job } from '../../../models/Job';
import { Profile } from '../../../models/Profile';
import { AccountType } from '../../../models/User';

export const createApplication = async (req: Request, res: Response) => {
  const { jobId } = req.body;
  const applicant = req.currentUser!._id;
  const accountType = req.currentUser?.accountType;

  const job = await Job.findById(jobId);
  if (!job) throw new BadRequestError('Job not found.');

  const msg = 'You can not apply for jobs as recruiter account type.';
  if (accountType !== AccountType.applicant) throw new BadRequestError(msg);

  const existingApplication = await Application.findOne({ applicant, jobId });
  const duplicateMsg = 'You have already sent an application for this job.';
  if (existingApplication) throw new BadRequestError(duplicateMsg);

  const profile = await Profile.findOne({ userId: req.currentUser!._id });
  const profileMsg = 'You must have a profile to apply for a job.';
  if (!profile) throw new BadRequestError(profileMsg);

  const application = Application.build({
    applicant,
    jobId,
    applicantProfile: profile._id,
  });

  application.status = StatusEnum.pending;
  application.jobCreator = job.creator;

  await application.save();
  res.status(201).send(application);
};
