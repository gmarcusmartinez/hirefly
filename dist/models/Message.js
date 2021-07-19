"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ObjectId = mongoose_1.default.Schema.Types.ObjectId;
var messageSchema = new mongoose_1.default.Schema({
    chat: { type: ObjectId, ref: 'Chat', required: true },
    sender: { type: ObjectId, ref: 'User', required: true },
    content: { type: String, required: true, trim: true },
});
messageSchema.statics.build = function (attrs) { return new Message(attrs); };
var Message = mongoose_1.default.model('Message', messageSchema);
exports.Message = Message;
