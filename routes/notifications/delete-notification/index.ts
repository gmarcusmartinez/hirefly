import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Notification } from '../../../models/Notification';

export const deleteNotification = async (req: Request, res: Response) => {
  const notification = await Notification.findById(req.params.id);
  if (!notification) throw new BadRequestError('Notification not found');

  const match = notification.userTo.toString() === req.currentUser?._id;
  if (!match) throw new NotAuthorizedError();
  const id = notification._id;

  await Notification.findByIdAndDelete(id);
  res.status(202).send(id);
};
