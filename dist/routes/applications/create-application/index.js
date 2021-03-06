"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApplication = void 0;
var common_1 = require("../../../common");
var Application_1 = require("../../../models/Application");
var Job_1 = require("../../../models/Job");
var Profile_1 = require("../../../models/Profile");
var User_1 = require("../../../models/User");
exports.createApplication = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var jobId, applicant, accountType, job, msg, existingApplication, duplicateMsg, profile, profileMsg, application;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                jobId = req.body.jobId;
                applicant = req.currentUser._id;
                accountType = (_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.accountType;
                return [4 /*yield*/, Job_1.Job.findById(jobId)];
            case 1:
                job = _b.sent();
                if (!job)
                    throw new common_1.BadRequestError('Job not found.');
                msg = 'You can not apply for jobs as recruiter account type.';
                if (accountType !== User_1.AccountType.applicant)
                    throw new common_1.BadRequestError(msg);
                return [4 /*yield*/, Application_1.Application.findOne({ applicant: applicant, jobId: jobId })];
            case 2:
                existingApplication = _b.sent();
                duplicateMsg = 'You have already sent an application for this job.';
                if (existingApplication)
                    throw new common_1.BadRequestError(duplicateMsg);
                return [4 /*yield*/, Profile_1.Profile.findOne({ userId: req.currentUser._id })];
            case 3:
                profile = _b.sent();
                profileMsg = 'You must have a profile to apply for a job.';
                if (!profile)
                    throw new common_1.BadRequestError(profileMsg);
                application = Application_1.Application.build({
                    applicant: applicant,
                    jobId: jobId,
                    applicantProfile: profile._id,
                });
                application.status = Application_1.StatusEnum.pending;
                application.jobCreator = job.creator;
                return [4 /*yield*/, application.save()];
            case 4:
                _b.sent();
                res.status(201).send(application);
                return [2 /*return*/];
        }
    });
}); };
