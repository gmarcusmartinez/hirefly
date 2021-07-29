import React from 'react';
import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { NotificationsBadge } from 'components/notifications/Badge';

interface IProps {
  text: string;
  icon: string;
  path: string;
}
export const SettingsLink: FC<IProps> = ({ text, icon, path }) => {
  const { toggleSidenav, setSidenavComponent, fetchNotifications } =
    useActions();

  const { mode, expanded } = useTypedSelector((state) => state.dashboard);

  const history = useHistory();
  const active = history.location.pathname === path;
  const displayText = !expanded ? 'hide-text' : 'display-text';

  const redirect = (route: string) => {
    history.push(route);
    toggleSidenav(false);
    if (path === '/dashboard/jobs') setSidenavComponent('MESSAGES');
  };

  React.useEffect(() => {
    if (text === 'Notifications') {
      fetchNotifications();
    }
  }, [fetchNotifications, text]);
  return (
    <div
      className={`settings__link ${mode} ${active}`}
      onClick={() => redirect(path)}
      style={active ? { color: '#838dec' } : { color: '' }}
    >
      <span className='material-icons'>{icon}</span>
      <span className={`${displayText}`}>{text}</span>
      {text === 'Notifications' && <NotificationsBadge />}
    </div>
  );
};
