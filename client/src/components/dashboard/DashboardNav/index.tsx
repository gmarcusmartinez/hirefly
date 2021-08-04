import { s3Url } from 'api/s3url';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Links } from 'components/dashboard/Links';
import { ChatList } from 'components/chat/List';

export const DashboardNav = () => {
  const { expanded, mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { me } = useTypedSelector(({ profiles }) => profiles);
  const { sidenavComponent } = useTypedSelector((state) => state.dashboard);

  const src = me?.imgUrl.startsWith('http')
    ? `${me.imgUrl}`
    : `${s3Url}/${me?.imgUrl}`;

  return (
    <div
      className={`dashboard__nav  ${expanded ? 'expand' : 'retract'} ${mode}`}
    >
      <div className='dashboard__nav__main '>
        {me && <img className='dashboard__nav__profile-img' src={src} alt='' />}
        {sidenavComponent === 'LINKS' && <Links />}
        {sidenavComponent === 'CHATS' && <ChatList />}
      </div>
    </div>
  );
};
