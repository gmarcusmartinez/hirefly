"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobValidation = void 0;
var express_validator_1 = require("express-validator");
exports.jobValidation = [
    express_validator_1.body('title').notEmpty().withMessage('Title field can not be empty.'),
    express_validator_1.body('location').notEmpty().withMessage('Location field can not be empty.'),
    express_validator_1.body('salary').notEmpty().withMessage('Salary field can not be empty.'),
    express_validator_1.body('salary').isNumeric().withMessage('Salary must be of type number.'),
];
