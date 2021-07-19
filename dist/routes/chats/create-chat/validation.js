"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatValidation = void 0;
var express_validator_1 = require("express-validator");
exports.chatValidation = [
    express_validator_1.body('partnerId').notEmpty().withMessage('Partner field can not be empty.'),
];
