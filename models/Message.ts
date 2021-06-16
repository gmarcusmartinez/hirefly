import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

export interface MessageAttrs {
  chat: string;
  sender: string;
  content: string;
}

interface MessageDoc extends mongoose.Document {
  chat: string;
  sender: string;
  content: string;
}

interface MessageModel extends mongoose.Model<MessageDoc> {
  build(attrs: MessageAttrs): MessageDoc;
}

const messageSchema = new mongoose.Schema<MessageDoc>({
  chat: { type: ObjectId, ref: 'Chat', required: true },
  sender: { type: ObjectId, ref: 'User', required: true },
  content: { type: String, required: true, trim: true },
});

messageSchema.statics.build = (attrs: MessageAttrs) => new Message(attrs);

const Message = mongoose.model<MessageDoc, MessageModel>(
  'Message',
  messageSchema
);
export { Message };
