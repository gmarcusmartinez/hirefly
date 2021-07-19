"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileValidation = void 0;
var express_validator_1 = require("express-validator");
exports.profileValidation = [
    express_validator_1.body('firstName').notEmpty().withMessage('Please provide a first name.'),
    express_validator_1.body('lastName').notEmpty().withMessage('Please provide a last name.'),
    express_validator_1.body('imgUrl').notEmpty().withMessage('Please provide a profile Picture.'),
];
