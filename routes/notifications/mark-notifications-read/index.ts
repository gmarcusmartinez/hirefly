import { Request, Response } from 'express';
import { asyncHandler } from '../../../common';
import { Notification } from '../../../models/Notification';

export const markAsRead = asyncHandler(async (req: Request, res: Response) => {
  const notifications = await Notification.find({
    $and: [{ userTo: req.currentUser?._id }, { opened: false }],
  });

  notifications.forEach(async (n) => {
    await Notification.findByIdAndUpdate(n._id, { opened: true });
  });

  res.sendStatus(204);
});
