"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var chatSchema = new mongoose_1.default.Schema({
    users: [{ userId: String, firstName: String, imgUrl: String }],
    latestMessage: { type: String, default: '' },
}, { timestamps: true });
chatSchema.statics.build = function (attrs) { return new Chat(attrs); };
var Chat = mongoose_1.default.model('Chat', chatSchema);
exports.Chat = Chat;
