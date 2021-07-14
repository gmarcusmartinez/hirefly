import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

interface NotificationAttrs {
  content?: string;
  userTo: string;
  userFrom: string;
  notificationType: string;
  opened?: boolean;
  entityId: string;
}

interface NotificationDoc extends mongoose.Document {
  content?: string;
  userTo: string;
  userFrom: string;
  notificationType: string;
  opened?: boolean;
  entityId: string;
}

interface NotificationModel extends mongoose.Model<NotificationDoc> {
  build(attrs: NotificationAttrs): NotificationDoc;
}

const notificationSchema = new mongoose.Schema<NotificationDoc>(
  {
    content: { type: String },
    userTo: { type: ObjectId, ref: 'User', required: true },
    userFrom: { type: ObjectId, ref: 'Profile', required: true },
    notificationType: { type: String },
    opened: { type: Boolean, default: false },
    entityId: { type: ObjectId },
  },
  { timestamps: true }
);

notificationSchema.statics.build = (attrs: NotificationAttrs) =>
  new Notification(attrs);

const Notification = mongoose.model<NotificationDoc, NotificationModel>(
  'Notification',
  notificationSchema
);
export { Notification };
