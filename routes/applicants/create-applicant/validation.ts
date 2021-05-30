import { body } from 'express-validator';

export const applicantValidation = [
  body('firstName').notEmpty().withMessage('Please provide a first name.'),
  body('lastName').notEmpty().withMessage('Please provide a last name.'),
  body('avatar').notEmpty().withMessage('Please provide a profile Picture.'),
  body('period').notEmpty().withMessage('Please select a period.'),
  body('position').notEmpty().withMessage('Please select a position.'),
];
