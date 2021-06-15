import { FC, useState } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';

interface IProps {
  socket: any;
}

export const ChatInput: FC<IProps> = ({ socket }) => {
  const { createMessage } = useActions();
  const { mode, theme } = useTypedSelector((state) => state.dashboard);
  const { selectedChatId } = useTypedSelector((state) => state.chats);
  const [content, setContent] = useState('');
  const [borderColor, setBorderColor] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (content.length) socket.emit('typing', { chat: selectedChatId });
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMessage(selectedChatId, content);
    setContent('');
  };
  const handleFocus = () => setBorderColor(theme);

  return (
    <form onSubmit={handleSubmit} className={`chat__input ${mode}`}>
      <input
        type='text'
        value={content}
        onChange={handleChange}
        onFocus={handleFocus}
        style={{ borderColor }}
      />
      <button className='chat__input__btn' style={{ backgroundColor: theme }}>
        <i className='material-icons'>send</i>
      </button>
    </form>
  );
};
