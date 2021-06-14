import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { messageValidation } from './create-message/validation';
import { createMessage } from './create-message';
// import { getMessages } from './get-messages';

const router = Router();
// router.get('/api/messages/:chatId', requireAuth, getMessages);

router.post(
  '/',
  currentUser,
  requireAuth,
  messageValidation,
  validateRequest,
  createMessage
);

export { router as messagesRouter };
