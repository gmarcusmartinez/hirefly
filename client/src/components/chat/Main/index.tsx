import { MessageBubble } from 'components/chat/MessageBubble';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Spinner } from 'components/common/Spinner';
import { IMessage } from 'interfaces';

export const ChatMain = () => {
  const { items, loading } = useTypedSelector((state) => state.messages);

  const list = items.map((msg: IMessage) => (
    <MessageBubble msg={msg} key={msg._id} />
  ));

  return (
    <div className='chat__main'>{loading ? <Spinner /> : <>{list}</>}</div>
  );
};
