import { useTypedSelector } from 'hooks/use-typed-selector';
import React from 'react';

export const ChatHeader = () => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  return (
    <div className={`chat__header ${mode}`}>
      <i className='material-icons'>close</i>
    </div>
  );
};
