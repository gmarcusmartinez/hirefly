import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { NotificationsBadge } from 'components/notifications/Badge';

interface IProps {
  text: string;
  icon: string;
  path: string;
  disabled?: boolean;
}
export const DashLink: FC<IProps> = ({ text, icon, path, disabled }) => {
  const { toggleSidenav, setHeaderText, setSidenavComponent } = useActions();

  const { mode, expanded } = useTypedSelector((state) => state.dashboard);

  const history = useHistory();
  const active = history.location.pathname === path;
  const displayText = !expanded ? 'hide-text' : 'display-text';
  const btnStyle = disabled ? 'disabled' : '';

  const redirect = (route: string) => {
    history.push(route);
    toggleSidenav(false);
    setHeaderText(text);
    if (route === '/dashboard/messenger') {
      setSidenavComponent('CHATS');
      toggleSidenav(true);
    }
  };

  return (
    <button
      className={`settings__link ${mode} ${active} ${btnStyle}`}
      onClick={() => redirect(path)}
      style={active ? { color: '#838dec' } : { color: '' }}
      disabled={disabled}
    >
      <span className='material-icons'>{icon}</span>
      <span className={`${displayText}`}>{text}</span>
      {text === 'Notifications' && <NotificationsBadge />}
    </button>
  );
};
