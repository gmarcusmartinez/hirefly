import { useState, useContext } from 'react';
import messages from 'api/messages';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import { SocketContext } from 'context/socket';

export const ChatInput = () => {
  const { messageSent } = useActions();
  const socket = useContext(SocketContext);

  const [content, setContent] = useState('');
  const { connected } = useTypedSelector((state) => state.socket);
  const { mode } = useTypedSelector((state) => state.dashboard);
  const { selectedChatId } = useTypedSelector((state) => state.chats);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!connected) return;
    e.preventDefault();

    const message = { content, chatId: selectedChatId };
    const { data } = await messages.post('/', message);

    socket.emit('new message', data);
    messageSent(data);
    setContent('');
  };
  if (!selectedChatId) return null;
  return (
    <form onSubmit={handleSubmit} className={`chat__input ${mode}`}>
      <input type='text' value={content} onChange={handleChange} />
      <button className='chat__input__btn'>
        <i className='material-icons'>send</i>
      </button>
    </form>
  );
};
