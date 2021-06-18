import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createJob } from './create-job';
import { jobValidation } from './create-job/validation';

const router = Router();

router.post(
  '/',
  currentUser,
  requireAuth,
  jobValidation,
  validateRequest,
  createJob
);

export { router as jobsRouter };
