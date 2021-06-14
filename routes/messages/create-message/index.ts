import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Chat } from '../../../models/Chat';
import { Message } from '../../../models/Message';

export const createMessage = async (req: Request, res: Response) => {
  const sender = req.currentUser!._id;

  const chat = await Chat.findById(req.body.chatId);
  if (!chat) throw new BadRequestError('Chat not found');

  const userIds = chat.users.map((user) => user._id);
  if (!userIds.includes(sender)) throw new NotAuthorizedError();

  const { chatId, content } = req.body;
  const message = Message.build({ chat: chatId, sender, content });

  // Update Chat Logic
  await Chat.findByIdAndUpdate(chat._id, { latestMessage: message.content });
  await chat.save();
  await message.save();

  res.status(201).send(message);
};
