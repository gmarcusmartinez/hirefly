import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createApplicant } from './create-applicant';
import { applicantValidation } from './create-applicant/validation';
import { getApplicant } from './get-applicant';

const router = Router();
router.get('/:id', currentUser, requireAuth, getApplicant);

router.post(
  '/',
  currentUser,
  requireAuth,
  applicantValidation,
  validateRequest,
  createApplicant
);

export { router as applicantRouter };
