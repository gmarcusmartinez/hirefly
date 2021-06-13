import { Router } from 'express';
import { currentUser, requireAuth, validateRequest } from '../../common';
import { chatValidation } from './create-chat/validation';
import { createChat } from './create-chat';
// import { getChats } from './get-chats';
// import { getChat } from './get-chat';

const router = Router();
// router.get('/api/chats', requireAuth, getChats);
// router.get('/api/chats/:partnerId', requireAuth, getChat);

router.post(
  '/',
  currentUser,
  requireAuth,
  chatValidation,
  validateRequest,
  createChat
);

export { router as chatsRouter };