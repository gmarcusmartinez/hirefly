"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.StatusEnum = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ObjectId = mongoose_1.default.Schema.Types.ObjectId;
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["pending"] = "pending";
    StatusEnum["declined"] = "declined";
    StatusEnum["accepted"] = "accepted";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
var applicationSchema = new mongoose_1.default.Schema({
    applicant: { type: ObjectId, ref: 'User', required: true },
    applicantProfile: { type: ObjectId, ref: 'Profile', required: true },
    jobCreator: { type: ObjectId, ref: 'User', required: true },
    jobId: { type: ObjectId, ref: 'Job', required: true },
    status: {
        type: String,
        defualt: StatusEnum.pending,
        enum: Object.values(StatusEnum),
    },
});
applicationSchema.statics.build = function (attrs) {
    return new Application(attrs);
};
var Application = mongoose_1.default.model('Application', applicationSchema);
exports.Application = Application;
