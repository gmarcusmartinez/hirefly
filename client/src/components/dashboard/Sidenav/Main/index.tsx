import { useTypedSelector } from 'hooks/use-typed-selector';
import { Settings } from 'components/dashboard/Settings';
import { ChatList } from 'components/chat/List';

export const Main = () => {
  const { sidenavComponent } = useTypedSelector((state) => state.dashboard);
  return (
    <div className='sidenav__main'>
      {sidenavComponent === 'SETTINGS' && <Settings />}
      {sidenavComponent === 'MESSAGES' && <ChatList />}
    </div>
  );
};
