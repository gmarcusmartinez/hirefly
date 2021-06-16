import messages from 'api/messages';
import { useState } from 'react';
import { useSocket } from 'hooks/use-socket';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';

export const ChatInput = () => {
  const dispatch = useDispatch();
  const { messageSent } = useActions();
  const { currentUser } = useTypedSelector((state) => state.auth);
  const { mode, theme } = useTypedSelector((state) => state.dashboard);
  const { selectedChatId } = useTypedSelector((state) => state.chats);

  const socket = useSocket(currentUser!, dispatch);
  const [content, setContent] = useState('');
  const [borderColor, setBorderColor] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const handleFocus = () => setBorderColor(theme);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = { content, chatId: selectedChatId };
    const { data } = await messages.post('/', message);
    socket.current.emit('new message', data);
    messageSent(data);
    setContent('');
  };

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
