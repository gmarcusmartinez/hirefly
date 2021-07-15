import { s3Url } from 'api/s3url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const { toggleSidenav, setSidenavComponent } = useActions();
  const { me } = useTypedSelector(({ profiles }) => profiles);

  const src = me?.avatar.startsWith('http')
    ? `${me.avatar}`
    : `${s3Url}/${me?.avatar}`;

  const { expanded, theme, mode } = useTypedSelector(
    ({ dashboard }) => dashboard
  );

  const className = `material-icons ${expanded ? 'rotate' : ''}`;

  const history = useHistory();
  const displaySettings = () => {
    setSidenavComponent('SETTINGS');
    history.push('/dashboard/profile-form');
  };

  const toggle = (e: any) => {
    e.stopPropagation();
    toggleSidenav(!expanded);
  };
  return (
    <div className='sidenav__header' onClick={displaySettings}>
      {me && <img className='sidenav__header__profile-img' src={src} alt='' />}
      <span className={`sidenav__header__name ${mode}`}>{me?.firstName}</span>
      <i className={className} onClick={toggle} style={{ color: theme }}>
        chevron_right
      </i>
    </div>
  );
};
