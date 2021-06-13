import React from 'react';
import { ChatItem } from '../Item';
import { chats } from './data';

export const ChatList = () => {
  const list = chats.map((c, i) => <ChatItem chat={c} key={i} />);
  return <div className='chat-list'>{list}</div>;
};
