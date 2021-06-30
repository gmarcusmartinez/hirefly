import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Application, StatusEnum } from '../../../models/Application';
import { Job } from '../../../models/Job';

export const getApplications = async (req: Request, res: Response) => {
  res.status(200);
};
