import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import React from 'react';
import { ChatItem } from '../Item';

export const ChatList = () => {
  const { fetchChats } = useActions();
  const { items } = useTypedSelector((state) => state.chats);

  React.useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  const list = items?.map((c) => <ChatItem chat={c} />);
  return <div className='chat-list'>{list}</div>;
};
