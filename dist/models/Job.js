"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ObjectId = mongoose_1.default.Schema.Types.ObjectId;
var JobCategory;
(function (JobCategory) {
    JobCategory["webdev"] = "web development";
    JobCategory["design"] = "design";
    JobCategory["data"] = "data analysis";
    JobCategory["ai"] = "A.I";
})(JobCategory || (JobCategory = {}));
var PositionEnum;
(function (PositionEnum) {
    PositionEnum["backend"] = "backend";
    PositionEnum["frontend"] = "frontend";
    PositionEnum["fullstack"] = "fullstack";
})(PositionEnum || (PositionEnum = {}));
var jobSchema = new mongoose_1.default.Schema({
    creator: { type: ObjectId, ref: 'User', required: true },
    imgUrl: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    location: { type: String, required: true, trim: true },
    link: { type: String, default: '' },
    salary: { type: Number, required: true },
    skills: { type: [String], default: [] },
    category: {
        type: String,
        enum: Object.values(JobCategory),
        default: JobCategory.webdev,
    },
    duration: { type: Number, default: 0 },
    position: {
        type: String,
        enum: Object.values(PositionEnum),
        default: PositionEnum.backend,
    },
});
jobSchema.statics.build = function (attrs) { return new Job(attrs); };
var Job = mongoose_1.default.model('Job', jobSchema);
exports.Job = Job;
