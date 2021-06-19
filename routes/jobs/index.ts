import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { jobValidation } from './create-job/validation';
import { createJob } from './create-job';
import { getJobs } from './get-jobs';
import { getMyJobs } from './get-my-jobs';
import { getJob } from './get-job';

const router = Router();
router.get('/', currentUser, requireAuth, getJobs);
router.get('/my-jobs', currentUser, requireAuth, getMyJobs);
router.get('/:id', currentUser, requireAuth, getJob);

router.post(
  '/',
  currentUser,
  requireAuth,
  jobValidation,
  validateRequest,
  createJob
);

export { router as jobsRouter };
