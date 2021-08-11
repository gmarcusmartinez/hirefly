import React from 'react';
import { IMessage } from 'interfaces';
import { Container } from './styles';
import { Spinner } from 'components/common/Spinner';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { MessageBubble } from 'components/chat/MessageBubble';

export const ChatMain = () => {
  const chatRef = React.useRef<any>(null);
  const { messageItems, loading } = useTypedSelector((state) => state.chats);

  const list = messageItems.map((msg: IMessage) => (
    <MessageBubble msg={msg} key={msg._id} />
  ));

  const renderList = () => (loading ? <Spinner /> : <>{list}</>);

  React.useEffect(() => {
    setTimeout(() => {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  }, []);

  return <Container ref={chatRef}>{renderList()}</Container>;
};
