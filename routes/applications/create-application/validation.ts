import { body } from 'express-validator';

export const applicationValidation = [
  body('jobId').notEmpty().withMessage('Job field can not be empty.'),
];
