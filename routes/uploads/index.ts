import { Router } from 'express';
import { uploadImage } from './uploadImage';
import { requireAuth } from '../../common/middlewares/require-auth';

const router = Router();
router.route('/api/uploads/image').get(requireAuth, uploadImage);
export { router as uploadRouter };
