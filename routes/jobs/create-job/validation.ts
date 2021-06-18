import { body } from 'express-validator';

export const jobValidation = [
  body('title').notEmpty().withMessage('Title field can not be empty.'),
  body('description')
    .notEmpty()
    .withMessage('Description field can not be empty.'),
  body('location').notEmpty().withMessage('Location field can not be empty.'),
  body('salary').notEmpty().withMessage('Salary field can not be empty.'),
  body('salary').isNumeric().withMessage('Salary must be of type number.'),
];
