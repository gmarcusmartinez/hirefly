import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Chat } from '../../../models/Chat';
import { Message } from '../../../models/Message';

export const getMessages = async (req: Request, res: Response) => {
  const sender = req.currentUser!._id;

  const chat = await Chat.findById(req.params.chatId);
  if (!chat) throw new BadRequestError('Chat not found');

  const userIds = chat.users.map((user) => user._id);
  if (!userIds.includes(sender)) throw new NotAuthorizedError();

  const messages = await Message.find({ chat: chat._id });
  res.status(200).send(messages);
};
