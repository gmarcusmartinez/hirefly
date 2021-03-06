"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatsRouter = void 0;
var express_1 = require("express");
var common_1 = require("../../common");
var validation_1 = require("./create-chat/validation");
var create_chat_1 = require("./create-chat");
var get_chats_1 = require("./get-chats");
var get_chat_1 = require("./get-chat");
var router = express_1.Router();
exports.chatsRouter = router;
router.get('/', common_1.currentUser, common_1.requireAuth, get_chats_1.getChats);
router.get('/:id', common_1.currentUser, common_1.requireAuth, get_chat_1.getChat);
router.post('/', common_1.currentUser, common_1.requireAuth, validation_1.chatValidation, common_1.validateRequest, create_chat_1.createChat);
