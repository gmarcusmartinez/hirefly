import { Router } from 'express';
import { currentUser, requireAuth } from '../../common';
import { getNotifications } from './get-notifications';

const router = Router();
router.get('/', currentUser, requireAuth, getNotifications);

export { router as notificationsRouter };
