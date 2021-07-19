"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageValidation = void 0;
var express_validator_1 = require("express-validator");
exports.messageValidation = [
    express_validator_1.body('chatId').notEmpty().withMessage('Chat id is required.'),
    express_validator_1.body('content').notEmpty().withMessage('Message must contain content.'),
];
