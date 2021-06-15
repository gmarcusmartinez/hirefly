import React from 'react';
import socketIOClient from 'socket.io-client';
import { ChatHeader } from 'components/chat/Header';
import { ChatInput } from 'components/chat/Input';
import { ChatMain } from 'components/chat/Main';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';

export const Chat = () => {
  const socket = socketIOClient('http://localhost:5000/');
  const { currentUser } = useTypedSelector(({ auth }) => auth);
  const { connectSocket } = useActions();

  React.useEffect(() => {
    socket.emit('init', { _id: currentUser!._id });
    socket.on('connected', () => connectSocket());
  }, [connectSocket, currentUser, socket]);

  return (
    <div className='chat'>
      <ChatHeader />
      <ChatMain />
      <ChatInput />
    </div>
  );
};
