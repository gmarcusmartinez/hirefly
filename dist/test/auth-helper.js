"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeAuthCookie = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var mongoose_1 = __importDefault(require("mongoose"));
var keys_1 = __importDefault(require("../config/keys"));
exports.fakeAuthCookie = function () {
    var payload = {
        _id: new mongoose_1.default.Types.ObjectId().toHexString(),
    };
    var token = jsonwebtoken_1.default.sign(payload, keys_1.default.jwtSecret);
    var session = { jwt: token };
    var sessionJSON = JSON.stringify(session);
    var base64 = Buffer.from(sessionJSON).toString('base64');
    return ["express:sess=" + base64];
};
