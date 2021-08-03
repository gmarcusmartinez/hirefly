import { s3Url } from 'api/s3url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const { setSidenavComponent } = useActions();
  const { me } = useTypedSelector(({ profiles }) => profiles);

  const src = me?.imgUrl.startsWith('http')
    ? `${me.imgUrl}`
    : `${s3Url}/${me?.imgUrl}`;

  const history = useHistory();
  const displaySettings = () => {
    setSidenavComponent('SETTINGS');
    history.push('/dashboard/edit-profile');
  };

  return (
    <div className='sidenav__header' onClick={displaySettings}>
      {me && <img className='sidenav__header__profile-img' src={src} alt='' />}
    </div>
  );
};
