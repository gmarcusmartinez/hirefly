export const Spinner = ({ message }: { message?: string }) => {
  return (
    <div className='spinner-overlay'>
      {message && <div className='spinner-message'>{message}</div>}
      <div className='spinner-container '></div>
    </div>
  );
};
