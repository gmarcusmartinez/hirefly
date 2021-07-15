import React from 'react';
import { IChatItem } from 'interfaces';
import { ChatItem } from '../Item';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router-dom';

export const ChatList = () => {
  const { fetchChats } = useActions();
  const { chatItems: items } = useTypedSelector((state) => state.chats);
  const { theme, expanded } = useTypedSelector((state) => state.dashboard);

  const history = useHistory();
  const showLink = history.location.pathname === '/dashboard/connections';

  React.useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  const list = items?.map((c: IChatItem) => <ChatItem chat={c} key={c._id} />);
  return (
    <div className='chat-list'>
      {showLink && (
        <div
          className='back-to-jobs'
          style={{ background: theme }}
          onClick={() => history.push('/dashboard/jobs')}
        >
          <span className={`${expanded ? 'expand' : 'retract'}`}>
            Back to finding new jobs
          </span>
          <span className='material-icons'>chevron_right</span>
        </div>
      )}
      {list}
    </div>
  );
};
