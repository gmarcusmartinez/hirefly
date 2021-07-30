import { s3Url } from 'api/s3url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const { toggleSidenav, setSidenavComponent } = useActions();
  const { me } = useTypedSelector(({ profiles }) => profiles);

  const src = me?.imgUrl.startsWith('http')
    ? `${me.imgUrl}`
    : `${s3Url}/${me?.imgUrl}`;

  const { expanded } = useTypedSelector(({ dashboard }) => dashboard);
  const className = `material-icons ${expanded ? 'rotate' : ''}`;

  const history = useHistory();
  const displaySettings = () => {
    setSidenavComponent('SETTINGS');
    history.push('/dashboard/edit-profile');
  };

  const toggle = (e: any) => {
    e.stopPropagation();
    toggleSidenav(!expanded);
  };

  return (
    <div className='sidenav__header' onClick={displaySettings}>
      {me && <span className='menu material-icons'>menu</span>}
      {me && <img className='sidenav__header__profile-img' src={src} alt='' />}
      <i className={className} onClick={toggle}>
        chevron_right
      </i>
    </div>
  );
};
