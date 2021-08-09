import { body } from 'express-validator';

export const jobValidation = [
  body('title').notEmpty().withMessage('Title field can not be empty.'),
  body('city').notEmpty().withMessage('City field can not be empty.'),
  body('country').notEmpty().withMessage('Country field can not be empty.'),
  body('imgUrl').notEmpty().withMessage('ImgUrl required.'),
  body('minSalary').notEmpty().withMessage('Min field can not be empty.'),
  body('minSalary')
    .isNumeric()
    .withMessage('Min Salary must be of type number.'),
  body('maxSalary').notEmpty().withMessage('Max field can not be empty.'),
  body('maxSalary')
    .isNumeric()
    .withMessage('Max Salary must be of type number.'),
];
