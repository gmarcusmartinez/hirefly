import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createApplicant } from './create-applicant';
import { applicantValidation } from './create-applicant/validation';

const router = Router();

router.post(
  '/',
  currentUser,
  requireAuth,
  applicantValidation,
  validateRequest,
  createApplicant
);

export { router as applicantRouter };
