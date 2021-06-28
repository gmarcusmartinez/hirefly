import { Router } from 'express';
import { uploadImage } from './uploadImage';
import { requireAuth } from '../../common/middlewares/require-auth';
import { currentUser } from '../../common';
import { uploadJobImage } from './upload-job-image';

const router = Router();
router.get('/image', currentUser, requireAuth, uploadImage);
router.get('/job-image', currentUser, requireAuth, uploadJobImage);
export { router as uploadRouter };
