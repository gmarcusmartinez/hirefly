import { Request, Response } from 'express';
import { Chat } from '../../../models/Chat';
import { Profile } from '../../../models/Profile';
import { Notification } from '../../../models/Notification';

export const createChat = async (req: Request, res: Response) => {
  const me = await Profile.findOne({ userId: req.currentUser!._id });
  const partner = await Profile.findOne({ userId: req.body.partnerId });

  const userOne = me!.createSubDoc();
  const userTwo = partner!.createSubDoc();

  const existingChat = await Chat.findOne({
    $or: [{ users: [userOne, userTwo] }, { users: [userTwo, userOne] }],
  });

  let chat;

  if (existingChat) chat = existingChat;
  else {
    chat = Chat.build({ users: [userOne, userTwo] });
    await chat.save();
  }

  const notification = Notification.build({
    userFrom: me!._id,
    userTo: req.body.partnerId,
    notificationType: 'application:accepted',
    entityId: chat._id,
  });

  await notification.save();
  res.status(201).send(chat);
};
