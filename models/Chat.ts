import mongoose from 'mongoose';

interface ChatAttrs {
  users: any[];
}

interface ChatDoc extends mongoose.Document {
  latestMessage: string;
  users: any[];
}

interface ChatModel extends mongoose.Model<ChatDoc> {
  build(attrs: ChatAttrs): ChatDoc;
}

const chatSchema = new mongoose.Schema<ChatDoc>(
  {
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    latestMessage: { type: String },
  },
  { timestamps: true }
);

chatSchema.statics.build = (attrs: ChatAttrs) => new Chat(attrs);

const Chat = mongoose.model<ChatDoc, ChatModel>('Chat', chatSchema);
export { Chat };
