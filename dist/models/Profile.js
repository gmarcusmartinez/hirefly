"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ObjectId = mongoose_1.default.Schema.Types.ObjectId;
var profileSchema = new mongoose_1.default.Schema({
    userId: { type: ObjectId, ref: 'User', required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    imgUrl: { type: String, required: true },
    cv: { type: String, default: '' },
    bio: { type: String, default: '' },
    link: { type: String, default: '' },
    location: { type: String, default: '' },
    skills: { type: [String], default: [] },
});
profileSchema.statics.build = function (attrs) { return new Profile(attrs); };
profileSchema.methods.createSubDoc = function () {
    var _a = this, userId = _a.userId, firstName = _a.firstName, imgUrl = _a.imgUrl;
    return { _id: userId, firstName: firstName, imgUrl: imgUrl };
};
var Profile = mongoose_1.default.model('Profile', profileSchema);
exports.Profile = Profile;
