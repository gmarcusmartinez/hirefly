import { useTypedSelector } from 'hooks/use-typed-selector';
import { Links } from 'components/dashboard/Links';
import { ChatList } from 'components/chat/List';
import { s3Url } from 'api/s3url';

export const Sidenav = () => {
  const { expanded, mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { me } = useTypedSelector(({ profiles }) => profiles);
  const { sidenavComponent } = useTypedSelector((state) => state.dashboard);

  const src = me?.imgUrl.startsWith('http')
    ? `${me.imgUrl}`
    : `${s3Url}/${me?.imgUrl}`;
  return (
    <div className={`sidenav ${expanded ? 'expand' : 'retract'} ${mode}`}>
      <div className='sidenav__main'>
        {me && <img className='sidenav__profile-img' src={src} alt='' />}
        {sidenavComponent === 'LINKS' && <Links />}
        {sidenavComponent === 'CHATS' && <ChatList />}
      </div>
    </div>
  );
};
