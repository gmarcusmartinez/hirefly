import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createJob } from './create-job';
import { jobValidation } from './create-job/validation';
import { getJobs } from './get-jobs';

const router = Router();
router.get('/', currentUser, requireAuth, getJobs);
router.post(
  '/',
  currentUser,
  requireAuth,
  jobValidation,
  validateRequest,
  createJob
);

export { router as jobsRouter };
