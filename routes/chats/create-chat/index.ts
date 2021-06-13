import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Chat } from '../../../models/Chat';

export const createChat = async (req: Request, res: Response) => {
  const me = req.currentUser!._id;
  const partner = req.body.partnerId;

  const existingChat = await Chat.findOne({
    $or: [{ users: [me, partner] }, { users: [partner, me] }],
  });

  const msg = 'You already have a chat with this user';
  if (existingChat) throw new BadRequestError(msg);

  const chat = Chat.build({ users: [me, partner] });

  await chat.save();
  res.status(201).send({ chat });
};
