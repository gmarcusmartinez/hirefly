import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { createProfile } from './create-profile';
import { profileValidation } from './create-profile/validation';
import { getMe } from './get-me';
import { getProfile } from './get-profile';
import { updateProfile } from './update-profile';

const router = Router();
router.get('/me', currentUser, requireAuth, getMe);
router.get('/:id', currentUser, requireAuth, getProfile);

router.post(
  '/',
  currentUser,
  requireAuth,
  profileValidation,
  validateRequest,
  createProfile
);

router.put(
  '/',
  currentUser,
  requireAuth,
  profileValidation,
  validateRequest,
  updateProfile
);

export { router as profileRouter };
