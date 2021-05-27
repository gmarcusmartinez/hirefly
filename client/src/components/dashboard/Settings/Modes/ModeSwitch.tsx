import React from 'react';
import { useActions } from 'hooks/use-actions';

interface IProps {
  mode: string;
  color: string;
}

export const ModeSwitch: React.FC<IProps> = ({ color, mode }) => {
  const { toggleMode } = useActions();
  const text = mode === 'light' ? 'light_mode' : 'dark_mode';
  const onClick = () => toggleMode(mode);
  return (
    <div className='mode-switch'>
      <span className='material-icons' onClick={onClick} style={{ color }}>
        {text}
      </span>
    </div>
  );
};
