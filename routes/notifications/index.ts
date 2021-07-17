import { Router } from 'express';
import { currentUser, requireAuth } from '../../common';
import { deleteNotification } from './delete-notification';
import { getNotifications } from './get-notifications';

const router = Router();
router.get('/', currentUser, requireAuth, getNotifications);
router.delete('/:id', currentUser, requireAuth, deleteNotification);

export { router as notificationsRouter };
