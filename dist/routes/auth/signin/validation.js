"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinValidation = void 0;
var express_validator_1 = require("express-validator");
exports.signinValidation = [
    express_validator_1.body('email').notEmpty().withMessage('Email required.'),
    express_validator_1.body('email').isEmail().withMessage('Email must be valid.'),
    express_validator_1.body('password').notEmpty().withMessage('Password required.'),
];
