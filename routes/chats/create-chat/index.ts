import { Request, Response } from 'express';
import { BadRequestError } from '../../../common';
import { Chat } from '../../../models/Chat';
import { Profile } from '../../../models/Profile';

export const createChat = async (req: Request, res: Response) => {
  const me = await Profile.findOne({ userId: req.currentUser?._id });
  const partner = await Profile.findOne({ userId: req.body.partnerId });

  const userOne = me!.createSubDoc();
  const userTwo = partner!.createSubDoc();

  const existingChat = await Chat.findOne({
    $or: [{ users: [userOne, userTwo] }, { users: [userTwo, userOne] }],
  });

  const msg = 'You already have a chat with this user';
  if (existingChat) throw new BadRequestError(msg);

  const chat = Chat.build({ users: [userOne, userTwo] });

  await chat.save();
  res.status(201).send({ chat });
};
