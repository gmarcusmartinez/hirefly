import { Request, Response } from 'express';
import { asyncHandler } from '../../../common';
import { Chat } from '../../../models/Chat';

export const getChats = asyncHandler(async (req: Request, res: Response) => {
  const chats = await Chat.find({
    users: { $elemMatch: { _id: { $eq: req.currentUser!._id } } },
  });
  res.status(200).send(chats);
});
