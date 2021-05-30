import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { signinValidation } from './signin/validation';
import { signupValidation } from './signup/validation';
import { signin } from './signin';
import { signup } from './signup';
import { getCurrentUser } from './current-user';
import { signout } from './signout';
import { activateAccount } from './activate-account';

const router = Router();

router.put('/activate-account', currentUser, requireAuth, activateAccount);
router.get('/currentuser', currentUser, getCurrentUser);
router.post('/signin', signinValidation, validateRequest, signin);
router.post('/signout', signout);
router.post('/signup', signupValidation, validateRequest, signup);

export { router as authRouter };
