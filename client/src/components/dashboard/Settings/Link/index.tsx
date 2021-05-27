import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  text: string;
}
export const SettingsLink: React.FC<IProps> = ({ text }) => {
  const { mode, theme } = useTypedSelector((state) => state.dashboard);
  const darkmode = mode === 'dark' ? 'darkmode' : '';
  return (
    <div className={`settings__link ${darkmode}`}>
      <span>{text}</span>
      <div style={{ backgroundColor: theme }}></div>
    </div>
  );
};
