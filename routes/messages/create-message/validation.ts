import { body } from 'express-validator';

export const messageValidation = [
  body('chatId').notEmpty().withMessage('Chat id is required.'),
  body('content').notEmpty().withMessage('Message must contain content.'),
];
