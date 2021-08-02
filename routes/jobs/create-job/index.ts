import { Request, Response } from 'express';
import { Job } from '../../../models/Job';

export const createJob = async (req: Request, res: Response) => {
  const creator = req.currentUser!._id;

  const skills = req.body.skills
    ? req.body.skills.toLowerCase().split(',')
    : [];

  const job = Job.build({
    creator,
    title: req.body.title,
    company: req.body.company,
    link: req.body.link,
    position: req.body.position,
    category: req.body.category,
    minSalary: req.body.minSalary,
    maxSalary: req.body.maxSalary,
    city: req.body.city,
    country: req.body.country,
    imgUrl: req.body.imgUrl,
    description: req.body.description,
    skills,
  });

  await job.save();
  res.status(201).send(job);
};
