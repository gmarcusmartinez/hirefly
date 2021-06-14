import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';
import { IChatItem } from 'interfaces';
import { s3Url } from 'api/s3url';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';

interface IProps {
  chat: IChatItem;
}

export const ChatItem: FC<IProps> = ({ chat }) => {
  const { fetchMessages, setHeader } = useActions();
  const { currentUser } = useTypedSelector((state) => state.auth);
  const { mode } = useTypedSelector((state) => state.dashboard);

  const partner = chat.users.find((user) => user._id !== currentUser?._id);
  const src = partner ? `${s3Url}/${partner.avatar}` : '';

  const history = useHistory();

  const handleClick = () => {
    history.push('/dashboard/connections');
    fetchMessages(chat._id);
    // @ts-ignore
    setHeader(partner);
  };

  return (
    <div className={`chat-item ${mode}`} onClick={handleClick}>
      <div className='chat-item__img'>
        <img src={src} alt='chat-item' />
      </div>
      <div className='chat-item__info'>
        <h3 className={mode}>{partner?.firstName}</h3>
        <span>{chat.latestMessage || ''}</span>
      </div>
    </div>
  );
};
