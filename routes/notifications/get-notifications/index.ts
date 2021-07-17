import { Request, Response } from 'express';
import { asyncHandler } from '../../../common';
import { Notification } from '../../../models/Notification';

export const getNotifications = asyncHandler(
  async (req: Request, res: Response) => {
    const notifications = await Notification.find({
      userTo: req.currentUser!._id,
    })
      .populate({ path: 'userFrom', select: 'firstName lastName imgUrl' })
      .sort({ createdAt: -1 });
    res.status(200).send(notifications);
  }
);
