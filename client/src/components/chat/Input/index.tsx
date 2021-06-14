import { useTypedSelector } from 'hooks/use-typed-selector';

export const ChatInput = () => {
  const { mode, theme } = useTypedSelector((state) => state.dashboard);

  return (
    <div className={`chat__input ${mode}`}>
      <input type='text' />
      <div className='chat__input__btn' style={{ backgroundColor: theme }}>
        <i className='material-icons'>send</i>
      </div>
    </div>
  );
};
