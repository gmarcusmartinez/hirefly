import { SidenavHeader } from 'components/dashboard/SidenavHeader';
import { SidenavMain } from 'components/dashboard/SidenavMain';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Dashboard = () => {
  const { expand } = useTypedSelector((state) => state.dashboard);
  return (
    <div className='dashboard'>
      <div className='dashboard__panel'>
        <div className={`sidenav ${expand ? 'expand' : 'retract'}`}>
          <SidenavHeader />
          <SidenavMain />
        </div>
        <div className='dashboard__main'></div>
      </div>
    </div>
  );
};
