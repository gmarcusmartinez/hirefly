import { Request, Response } from 'express';
import { Job } from '../../../models/Job';

export const createJob = async (req: Request, res: Response) => {
  const creator = req.currentUser!._id;

  const { title, description, salary, location, imgUrl, duration } = req.body;

  const skills = req.body.skills
    ? req.body.skills.toLowerCase().split(',')
    : [];

  const jobValues = {
    title,
    description,
    salary,
    location,
    skills,
    imgUrl,
    duration,
  };
  const job = Job.build({ ...jobValues, creator });

  await job.save();
  res.status(201).send(job);
};
