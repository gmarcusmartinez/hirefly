"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobValidation = void 0;
var express_validator_1 = require("express-validator");
exports.jobValidation = [
    express_validator_1.body('title').notEmpty().withMessage('Title field can not be empty.'),
    express_validator_1.body('city').notEmpty().withMessage('City field can not be empty.'),
    express_validator_1.body('country').notEmpty().withMessage('Country field can not be empty.'),
    express_validator_1.body('imgUrl').notEmpty().withMessage('ImgUrl required.'),
    express_validator_1.body('minSalary').notEmpty().withMessage('Min field can not be empty.'),
    express_validator_1.body('minSalary')
        .isNumeric()
        .withMessage('Min Salary must be of type number.'),
    express_validator_1.body('maxSalary').notEmpty().withMessage('Max field can not be empty.'),
    express_validator_1.body('maxSalary')
        .isNumeric()
        .withMessage('Max Salary must be of type number.'),
];
