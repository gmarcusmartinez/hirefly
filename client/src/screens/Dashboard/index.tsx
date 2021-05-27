import { Route, Switch } from 'react-router-dom';
import { SidenavHeader } from 'components/dashboard/SidenavHeader';
import { SidenavMain } from 'components/dashboard/SidenavMain';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Signout } from 'screens/Signout';

export const Dashboard = () => {
  const { expanded, theme, mode } = useTypedSelector(
    (state) => state.dashboard
  );
  const backgroundColor = theme;
  const darkmode = mode === 'dark' ? 'darkmode' : '';

  return (
    <div className='dashboard' style={{ backgroundColor }}>
      <div className={`dashboard__panel ${darkmode}`}>
        <div
          className={`sidenav ${expanded ? 'expand' : 'retract'} ${darkmode}`}
        >
          <SidenavHeader />
          <SidenavMain />
        </div>
        <div className='dashboard__main'>
          <Switch>
            <Route path='/dashboard/signout' component={Signout} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
