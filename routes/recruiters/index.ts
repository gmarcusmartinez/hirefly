import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createRecruiter } from './create-recruiter';
import { recruiterValidation } from './create-recruiter/validation';
import { updateRecruiter } from './update-recruiter';

const router = Router();

router.post(
  '/',
  currentUser,
  requireAuth,
  recruiterValidation,
  validateRequest,
  createRecruiter
);
router.put(
  '/',
  currentUser,
  requireAuth,
  recruiterValidation,
  validateRequest,
  updateRecruiter
);

export { router as recruiterRouter };
