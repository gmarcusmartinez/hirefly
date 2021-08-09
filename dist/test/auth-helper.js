"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeApplicantCookie = exports.fakeRecruiterCookie = exports.fakeAuthCookie = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var mongoose_1 = __importDefault(require("mongoose"));
var keys_1 = __importDefault(require("../config/keys"));
var User_1 = require("../models/User");
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
exports.fakeRecruiterCookie = function () {
    var payload = {
        _id: new mongoose_1.default.Types.ObjectId().toHexString(),
        accountType: User_1.AccountType.recruiter,
    };
    var token = jsonwebtoken_1.default.sign(payload, keys_1.default.jwtSecret);
    var session = { jwt: token };
    var sessionJSON = JSON.stringify(session);
    var base64 = Buffer.from(sessionJSON).toString('base64');
    return ["express:sess=" + base64];
};
exports.fakeApplicantCookie = function () {
    var payload = {
        _id: new mongoose_1.default.Types.ObjectId().toHexString(),
        accountType: User_1.AccountType.applicant,
    };
    var token = jsonwebtoken_1.default.sign(payload, keys_1.default.jwtSecret);
    var session = { jwt: token };
    var sessionJSON = JSON.stringify(session);
    var base64 = Buffer.from(sessionJSON).toString('base64');
    return ["express:sess=" + base64];
};
