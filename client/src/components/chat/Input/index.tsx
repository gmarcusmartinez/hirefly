import { useState, useContext } from 'react';
import messages from 'api/messages';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import { SocketContext } from 'context/socket';

export const ChatInput = () => {
  const socket = useContext(SocketContext);

  const { messageSent } = useActions();
  const { mode, theme } = useTypedSelector((state) => state.dashboard);
  const { connected } = useTypedSelector((state) => state.socket);

  const [content, setContent] = useState('');
  const [borderColor, setBorderColor] = useState('');

  const handleFocus = () => setBorderColor(theme);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const { selectedChatId } = useTypedSelector((state) => state.chats);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!connected) return;
    e.preventDefault();

    const message = { content, chatId: selectedChatId };
    const { data } = await messages.post('/', message);

    socket.emit('new message', data);
    messageSent(data);
    setContent('');
  };

  const handleKeyDown = () => {
    if (!connected) return;
    // setLastTypingtime(new Date().getTime());
    socket.emit('typing', selectedChatId);
  };

  return (
    <form onSubmit={handleSubmit} className={`chat__input ${mode}`}>
      <input
        type='text'
        value={content}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        style={{ borderColor }}
      />
      <button className='chat__input__btn' style={{ backgroundColor: theme }}>
        <i className='material-icons'>send</i>
      </button>
    </form>
  );
};
