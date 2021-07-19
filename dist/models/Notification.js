"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ObjectId = mongoose_1.default.Schema.Types.ObjectId;
var notificationSchema = new mongoose_1.default.Schema({
    content: { type: String },
    userTo: { type: ObjectId, ref: 'User', required: true },
    userFrom: { type: ObjectId, ref: 'Profile', required: true },
    notificationType: { type: String },
    opened: { type: Boolean, default: false },
    entityId: { type: ObjectId },
}, { timestamps: true });
notificationSchema.statics.build = function (attrs) {
    return new Notification(attrs);
};
var Notification = mongoose_1.default.model('Notification', notificationSchema);
exports.Notification = Notification;
