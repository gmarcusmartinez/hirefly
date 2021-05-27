import { useTypedSelector } from 'hooks/use-typed-selector';

export const Spinner = ({ message }: { message?: string }) => {
  const { theme } = useTypedSelector((state) => state.dashboard);
  return (
    <div className='spinner-overlay'>
      {message && <div className='spinner-message'>{message}</div>}
      <div className='spinner-container' style={{ borderTopColor: theme }} />
    </div>
  );
};
