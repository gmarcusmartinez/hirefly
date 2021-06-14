import React from 'react';
import { ChatHeader } from 'components/chat/Header';
import { ChatInput } from 'components/chat/Input';

export const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chat__main'></div>
      <ChatInput />
    </div>
  );
};
