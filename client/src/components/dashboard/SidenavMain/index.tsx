import { useTypedSelector } from 'hooks/use-typed-selector';
import { Settings } from '../Settings';

export const SidenavMain = () => {
  const { sidenavComponent } = useTypedSelector((state) => state.dashboard);
  return (
    <div className='sidenav__main'>
      {sidenavComponent === 'SETTINGS' && <Settings />}
    </div>
  );
};
