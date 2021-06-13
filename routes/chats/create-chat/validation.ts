import { body } from 'express-validator';

export const chatValidation = [
  body('partnerId').notEmpty().withMessage('Partner field can not be empty.'),
];
