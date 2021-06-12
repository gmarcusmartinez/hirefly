import React from 'react';
import { ChatItem } from '../Item';
import { chats } from './data';

export const ChatList = () => {
  const list = chats.map((c) => <ChatItem chat={c} key={c.id} />);
  return <div className='chat-list'>{list}</div>;
};
