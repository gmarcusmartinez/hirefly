import { body } from 'express-validator';

export const recruiterValidation = [
  body('firstName').notEmpty().withMessage('Please provide a first name.'),
  body('lastName').notEmpty().withMessage('Please provide a last name.'),
  body('avatar').notEmpty().withMessage('Please provide a profile Picture.'),
  body('company').notEmpty().withMessage('Please provide a company.'),
];
