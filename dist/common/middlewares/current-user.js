"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var keys_1 = __importDefault(require("../../config/keys"));
exports.currentUser = function (req, res, next) {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt)) {
        return next();
    }
    var key = keys_1.default.jwtSecret;
    try {
        var payload = jsonwebtoken_1.default.verify(req.session.jwt, key);
        req.currentUser = payload;
    }
    catch (err) { }
    next();
};
