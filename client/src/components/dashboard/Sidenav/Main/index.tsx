import { useTypedSelector } from 'hooks/use-typed-selector';
import { Settings } from 'components/dashboard/Settings';
import { ChatList } from 'components/chat/List';
import { s3Url } from 'api/s3url';

export const Main = () => {
  const { me } = useTypedSelector(({ profiles }) => profiles);
  const { sidenavComponent } = useTypedSelector((state) => state.dashboard);

  const src = me?.imgUrl.startsWith('http')
    ? `${me.imgUrl}`
    : `${s3Url}/${me?.imgUrl}`;

  return (
    <div className='sidenav__main'>
      {me && <img className='sidenav__profile-img' src={src} alt='' />}
      {sidenavComponent === 'SETTINGS' && <Settings />}
      {sidenavComponent === 'MESSAGES' && <ChatList />}
    </div>
  );
};
