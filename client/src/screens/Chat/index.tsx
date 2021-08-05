import { ChatInput } from 'components/chat/Input';
import { ChatMain } from 'components/chat/Main';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Chat = () => {
  const { selectedChatId } = useTypedSelector((state) => state.chats);
  return (
    <div className='chat'>
      {selectedChatId && (
        <>
          <ChatMain />
          <ChatInput />
        </>
      )}
    </div>
  );
};
