import { body } from 'express-validator';

export const profileValidation = [
  body('firstName').notEmpty().withMessage('Please provide a first name.'),
  body('lastName').notEmpty().withMessage('Please provide a last name.'),
  body('imgUrl').notEmpty().withMessage('Please provide a profile Picture.'),
];
