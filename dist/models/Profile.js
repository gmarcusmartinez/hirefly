"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ObjectId = mongoose_1.default.Schema.Types.ObjectId;
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
    Gender["nonbinary"] = "nonbinary";
})(Gender || (Gender = {}));
var profileSchema = new mongoose_1.default.Schema({
    userId: { type: ObjectId, ref: 'User', required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    city: { type: String, default: '' },
    country: { type: String, default: '' },
    link: { type: String, default: '' },
    gender: {
        type: String,
        enum: Object.values(Gender),
        default: Gender.male,
    },
    imgUrl: { type: String, required: true },
    bio: { type: String, default: '' },
    skills: { type: [String], default: [] },
});
profileSchema.statics.build = function (attrs) { return new Profile(attrs); };
profileSchema.methods.createSubDoc = function () {
    var _a = this, userId = _a.userId, firstName = _a.firstName, imgUrl = _a.imgUrl;
    return { _id: userId, firstName: firstName, imgUrl: imgUrl };
};
var Profile = mongoose_1.default.model('Profile', profileSchema);
exports.Profile = Profile;
