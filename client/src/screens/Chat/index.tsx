import { useDispatch } from 'react-redux';
import { useSocket } from 'hooks/use-socket';
import { ChatHeader } from 'components/chat/Header';
import { ChatInput } from 'components/chat/Input';
import { ChatMain } from 'components/chat/Main';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Chat = () => {
  const { currentUser } = useTypedSelector(({ auth }) => auth);

  const dispatch = useDispatch();
  useSocket(currentUser!, dispatch);

  return (
    <div className='chat'>
      <ChatHeader />
      <ChatMain />
      <ChatInput />
    </div>
  );
};
