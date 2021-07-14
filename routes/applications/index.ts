import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createApplication } from './create-application';
import { applicationValidation } from './create-application/validation';
import { getApplications } from './get-applications';
import { upadteApplication } from './update-application';

const router = Router();

router.get('/:jobId', currentUser, requireAuth, getApplications);

router.post(
  '/',
  currentUser,
  requireAuth,
  applicationValidation,
  validateRequest,
  createApplication
);
router.put('/:id', currentUser, requireAuth, upadteApplication);

export { router as applicationsRouter };
