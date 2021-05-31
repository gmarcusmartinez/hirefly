import { Route, Switch } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { CreateProfile } from 'screens/Profile';
import { Sidenav } from 'components/dashboard/Sidenav';
import { Signout } from 'screens/Signout';

export const Dashboard = () => {
  const { theme, mode } = useTypedSelector(({ dashboard }) => dashboard);
  const backgroundColor = theme;
  const darkmode = mode === 'dark' ? 'darkmode' : '';

  return (
    <div className='dashboard' style={{ backgroundColor }}>
      <div className={`dashboard__panel ${darkmode}`}>
        <Sidenav />
        <div className='dashboard__main'>
          <Switch>
            <Route path='/dashboard/profile-form' component={CreateProfile} />
            <Route path='/dashboard/signout' component={Signout} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
