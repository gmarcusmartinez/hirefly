import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';
import { IChatItem } from 'interfaces';
import { s3Url } from 'api/s3url';
import { useActions } from 'hooks/use-actions';

interface IProps {
  chat: IChatItem;
}

export const ChatItem: FC<IProps> = ({ chat }) => {
  const { setChat } = useActions();
  const { currentUser } = useTypedSelector((state) => state.auth);
  const { mode } = useTypedSelector((state) => state.dashboard);
  const { selectedChatId } = useTypedSelector((state) => state.chats);

  const partner = chat.users.find((u) => u._id !== currentUser!._id);
  const handleClick = () => setChat(chat._id, currentUser!._id);

  const itemClass = `${selectedChatId === chat._id ? 'selected-chat' : ''}`;
  return (
    <div className={`chat-item ${mode} ${itemClass}`} onClick={handleClick}>
      <div className='chat-item__img'>
        <img src={`${s3Url}/${partner!.imgUrl}`} alt='chat-item' />
      </div>
      <div className='chat-item__info'>
        <h3 className={mode}>{partner!.firstName}</h3>
        <span>{chat.latestMessage || ''}</span>
      </div>
    </div>
  );
};
