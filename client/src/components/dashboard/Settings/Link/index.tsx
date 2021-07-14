import React from 'react';
import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';

interface IProps {
  text: string;
  icon: string;
  path: string;
}
export const SettingsLink: FC<IProps> = ({ text, icon, path }) => {
  const { toggleSidenav, setSidenavComponent } = useActions();
  const [color, setColor] = React.useState('');

  const { mode, theme, expanded } = useTypedSelector(
    (state) => state.dashboard
  );

  const history = useHistory();
  const active = history.location.pathname === path;
  const displayText = !expanded ? 'hide-text' : 'display-text';

  const redirect = (route: string) => {
    history.push(route);
    toggleSidenav(false);
    if (path === '/dashboard/jobs') setSidenavComponent('MESSAGES');
  };

  return (
    <div
      className={`settings__link ${mode} ${active}`}
      onClick={() => redirect(path)}
      onMouseOver={() => setColor(theme)}
      onMouseLeave={() => setColor('')}
      style={active ? { color: theme } : { color }}
    >
      <span className='material-icons'>{icon}</span>
      <span className={`${displayText}`}>{text}</span>
    </div>
  );
};
