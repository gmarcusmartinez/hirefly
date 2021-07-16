import { IMessage } from 'interfaces';

export const updateMessages = (msgArr: any, msg: IMessage) => {
  const messageIds = msgArr.map((m: IMessage) => m._id);
  if (messageIds.includes(msg._id)) {
    return msgArr;
  }
  return [...msgArr, msg];
};
