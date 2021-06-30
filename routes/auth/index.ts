import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { signinValidation } from './signin/validation';
import { signupValidation } from './signup/validation';
import { signin } from './signin';
import { signup } from './signup';
import { getCurrentUser } from './current-user';
import { signout } from './signout';

const router = Router();

router.get('/currentuser', currentUser, requireAuth, getCurrentUser);
router.post('/signin', signinValidation, validateRequest, signin);
router.post('/signout', signout);
router.post('/signup', signupValidation, validateRequest, signup);

export { router as authRouter };
