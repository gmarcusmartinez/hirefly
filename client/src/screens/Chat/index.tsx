import { ChatHeader } from 'components/chat/Header';
import { ChatInput } from 'components/chat/Input';
import { ChatMain } from 'components/chat/Main';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IMessage } from 'interfaces';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MessageActionTypes } from 'state';
import { SocketContext } from 'context/socket';

export const Chat = () => {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const { selectedChatId } = useTypedSelector((state) => state.chats);

  useEffect(() => {
    // Create Message for Receiver
    socket.on('message received', (msg: IMessage) => {
      dispatch({ type: MessageActionTypes.MESSAGE_RECIEVED, payload: msg });
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Create Message for Sender
    socket.on('message sent', (msg: IMessage) => {
      dispatch({ type: MessageActionTypes.MESSAGE_SENT, payload: msg });
    });
  }, [dispatch, socket]);

  useEffect(() => {
    socket.emit('join room', selectedChatId);
  }, [socket, selectedChatId]);

  return (
    <div className='chat'>
      <ChatHeader />
      <ChatMain />
      <ChatInput />
    </div>
  );
};
