import { ChatInput } from 'components/chat/Input';
import { ChatMain } from 'components/chat/Main';
import { Container } from 'components/chat/Main/styles';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Chat = () => {
  const { selectedChatId } = useTypedSelector((state) => state.chats);
  return (
    <Container>
      {selectedChatId && (
        <>
          <ChatMain />
          <ChatInput />
        </>
      )}
    </Container>
  );
};
