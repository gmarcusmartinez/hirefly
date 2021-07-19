"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import devKeys from './dev';
var prod_1 = __importDefault(require("./prod"));
var keys;
if (process.env.NODE_ENV === 'production')
    keys = prod_1.default;
// else keys = devKeys;
exports.default = keys;
