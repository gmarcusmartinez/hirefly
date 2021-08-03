import { Request, Response } from 'express';
import {
  asyncHandler,
  BadRequestError,
  NotAuthorizedError,
} from '../../../common';
import { Chat } from '../../../models/Chat';

export const getChat = asyncHandler(async (req: Request, res: Response) => {
  const chat = await Chat.findById(req.params.id);
  if (!chat) throw new BadRequestError('Chat not found');

  const users = chat.users.map((u) => u._id);
  if (!users.includes(req.currentUser!._id)) {
    throw new NotAuthorizedError();
  }

  res.status(200).send(chat);
});
