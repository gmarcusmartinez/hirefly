import { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from '../../../common';
import { Application, StatusEnum } from '../../../models/Application';
import { Chat } from '../../../models/Chat';

export const upadteApplication = async (req: Request, res: Response) => {
  let doc;
  doc = await Application.findById(req.params.id);
  if (!doc) throw new BadRequestError('Application not found');

  const match = doc.jobCreator.toString() === req.currentUser?._id;
  if (!match) throw new NotAuthorizedError();

  const opts = { new: true };
  const { status } = req.body;
  doc = await Application.findByIdAndUpdate(doc._id, { status }, opts);

  await doc!.save();
  res.status(204).send(doc);
};
