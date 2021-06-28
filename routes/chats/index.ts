import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { chatValidation } from './create-chat/validation';
import { createChat } from './create-chat';
import { getChats } from './get-chats';

const router = Router();
router.get('/', currentUser, requireAuth, getChats);

router.post(
  '/',
  currentUser,
  requireAuth,
  chatValidation,
  validateRequest,
  createChat
);

export { router as chatsRouter };
