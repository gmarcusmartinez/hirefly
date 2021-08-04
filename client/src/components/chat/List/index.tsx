import React from 'react';
import { IChatItem } from 'interfaces';
import { ChatItem } from '../Item';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { NavSwitch } from '../NavSwitch';

export const ChatList = () => {
  const { fetchChats } = useActions();
  const { chatItems: items } = useTypedSelector((state) => state.chats);

  React.useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  const list = items?.map((c: IChatItem) => <ChatItem chat={c} key={c._id} />);
  return (
    <div className='chat-list'>
      <NavSwitch />
      {list}
    </div>
  );
};
