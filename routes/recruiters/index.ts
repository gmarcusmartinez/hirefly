import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createRecruiter } from './create-recruiter';
import { recruiterValidation } from './create-recruiter/validation';

const router = Router();

router.post(
  '/',
  currentUser,
  requireAuth,
  recruiterValidation,
  validateRequest,
  createRecruiter
);

export { router as recruiterRouter };
