import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';

interface IProps {
  chat: {
    imgUrl: string;
    lastMessage: string;
    name: string;
  };
}

export const ChatItem: FC<IProps> = ({ chat }) => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  return (
    <div className={`chat-item ${mode}`}>
      <div className='chat-item__img'>
        <img src={chat.imgUrl} alt='chat-item' />
      </div>
      <div className='chat-item__info'>
        <h3 className={mode}>{chat.name}</h3>
        <span>{chat.lastMessage}</span>
      </div>
    </div>
  );
};
