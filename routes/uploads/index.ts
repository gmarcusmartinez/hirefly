import { Router } from 'express';
import { uploadImage } from './uploadImage';
import { requireAuth } from '../../common/middlewares/require-auth';
import { currentUser } from '../../common';

const router = Router();
router.get('/image', currentUser, requireAuth, uploadImage);
export { router as uploadRouter };
