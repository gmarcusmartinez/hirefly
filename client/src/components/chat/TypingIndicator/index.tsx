import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const TypingIndicator = () => {
  const { theme } = useTypedSelector((state) => state.dashboard);
  const style = { backgroundColor: theme };
  return (
    <div className='typing-indicator' style={style}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
