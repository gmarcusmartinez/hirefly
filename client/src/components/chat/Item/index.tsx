import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';
import { ProfileSubDoc } from 'interfaces';
import { s3Url } from 'api/s3url';

interface IProps {
  chat: {
    users: ProfileSubDoc[];
  };
}

export const ChatItem: FC<IProps> = ({ chat }) => {
  const { currentUser } = useTypedSelector((state) => state.auth);
  const { mode } = useTypedSelector((state) => state.dashboard);

  const partner = chat.users.find((user) => user._id !== currentUser?._id);
  const src = partner ? `${s3Url}/${partner.avatar}` : '';

  return (
    <div className={`chat-item ${mode}`}>
      <div className='chat-item__img'>
        <img src={src} alt='chat-item' />
      </div>
      <div className='chat-item__info'>
        <h3 className={mode}>{partner?.firstName}</h3>
        {/* <span>{chat.lastMessage}</span> */}
      </div>
    </div>
  );
};
