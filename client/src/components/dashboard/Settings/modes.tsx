import { useActions } from 'hooks/use-actions';
import React from 'react';

export const Modes = () => {
  const { toggleMode } = useActions();
  return (
    <div className='settings__modes'>
      <span className='material-icons' onClick={() => toggleMode('light')}>
        light_mode
      </span>
      <span className='material-icons' onClick={() => toggleMode('dark')}>
        dark_mode
      </span>
    </div>
  );
};
