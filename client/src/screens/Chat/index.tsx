import { ChatInput } from 'components/chat/Input';
import { ChatMain } from 'components/chat/Main';

export const Chat = () => {
  return (
    <div className='chat'>
      <ChatMain />
      <ChatInput />
    </div>
  );
};
