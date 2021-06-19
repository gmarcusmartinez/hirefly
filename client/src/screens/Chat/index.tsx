import { ChatHeader } from 'components/chat/Header';
import { ChatInput } from 'components/chat/Input';
import { ChatMain } from 'components/chat/Main';

export const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <ChatMain />
      <ChatInput />
    </div>
  );
};
