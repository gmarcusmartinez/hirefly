"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationValidation = void 0;
var express_validator_1 = require("express-validator");
exports.applicationValidation = [
    express_validator_1.body('jobId').notEmpty().withMessage('Job field can not be empty.'),
];
