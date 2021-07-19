import { Router } from 'express';
import { currentUser, requireAuth } from '../../common';
import { deleteNotification } from './delete-notification';
import { getNotifications } from './get-notifications';
import { markAsRead } from './mark-notifications-read';

const router = Router();
router.get('/', currentUser, requireAuth, getNotifications);
router.delete('/:id', currentUser, requireAuth, deleteNotification);
router.put('/mark-as-read', currentUser, requireAuth, markAsRead);

export { router as notificationsRouter };
