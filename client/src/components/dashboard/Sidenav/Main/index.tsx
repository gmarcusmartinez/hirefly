import { useTypedSelector } from 'hooks/use-typed-selector';
import { Settings } from 'components/dashboard/Settings';

export const Main = () => {
  const { sidenavComponent } = useTypedSelector((state) => state.dashboard);
  return (
    <div className='sidenav__main'>
      {sidenavComponent === 'SETTINGS' && <Settings />}
    </div>
  );
};
