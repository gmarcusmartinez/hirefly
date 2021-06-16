import { ChatHeader } from 'components/chat/Header';
import { ChatInput } from 'components/chat/Input';
import { ChatMain } from 'components/chat/Main';
import { useSocket } from 'hooks/use-socket';
import { useTypedSelector } from 'hooks/use-typed-selector';
import React from 'react';
import { useDispatch } from 'react-redux';

export const Chat = () => {
  const dispatch = useDispatch();
  const { currentUser } = useTypedSelector((state) => state.auth);
  const { selectedChatId } = useTypedSelector((state) => state.chats);
  const socket = useSocket(currentUser!, dispatch);

  React.useEffect(() => {
    socket.current.emit('join room', selectedChatId);
  }, [selectedChatId]);

  return (
    <div className='chat'>
      <ChatHeader />
      <ChatMain />
      <ChatInput />
    </div>
  );
};
