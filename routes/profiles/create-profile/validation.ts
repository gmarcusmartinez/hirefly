import { body } from 'express-validator';

export const profileValidation = [
  body('firstName').notEmpty().withMessage('Please provide a first name.'),
  body('lastName').notEmpty().withMessage('Please provide a last name.'),
  body('avatar').notEmpty().withMessage('Please provide a profile Picture.'),
  body('position').notEmpty().withMessage('Please select a position.'),
];
