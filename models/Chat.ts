import mongoose from 'mongoose';
import { ProfileSubDoc } from './Profile';

interface ChatAttrs {
  users: ProfileSubDoc[];
}

interface ChatDoc extends mongoose.Document {
  latestMessage: string;
  users: ProfileSubDoc[];
}

interface ChatModel extends mongoose.Model<ChatDoc> {
  build(attrs: ChatAttrs): ChatDoc;
}

const chatSchema = new mongoose.Schema<ChatDoc>(
  {
    users: [{ userId: String, firstName: String, imgUrl: String }],
    latestMessage: { type: String, default: '' },
  },
  { timestamps: true }
);

chatSchema.statics.build = (attrs: ChatAttrs) => new Chat(attrs);

const Chat = mongoose.model<ChatDoc, ChatModel>('Chat', chatSchema);
export { Chat };
