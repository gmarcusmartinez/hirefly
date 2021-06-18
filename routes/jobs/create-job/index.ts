import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Job } from '../../../models/Job';

export const createJob = async (req: Request, res: Response) => {
  const creator = req.currentUser!._id;

  const { title, description, salary, location, skills } = req.body;
  const jobValues = { title, description, salary, location, skills };

  const job = Job.build({ ...jobValues, creator });
  await job.save();
  res.send({ job });
};
