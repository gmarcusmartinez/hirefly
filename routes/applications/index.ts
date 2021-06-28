import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createApplication } from './create-application';
import { applicationValidation } from './create-application/validation';

const router = Router();

router.post(
  '/',
  currentUser,
  requireAuth,
  applicationValidation,
  validateRequest,
  createApplication
);
export { router as applicationsRouter };
