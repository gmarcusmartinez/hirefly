import { body } from 'express-validator';

export const signinValidation = [
  body('email').notEmpty().withMessage('Email required.'),
  body('email').isEmail().withMessage('Email must be valid.'),
  body('password').notEmpty().withMessage('Password required.'),
];
