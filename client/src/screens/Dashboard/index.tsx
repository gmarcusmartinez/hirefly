import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { CreateProfile } from 'screens/Profile';
import { Sidenav } from 'components/dashboard/Sidenav';
import { Signout } from 'screens/Signout';
import { useActions } from 'hooks/use-actions';
import { Chat } from 'screens/Chat';

export const Dashboard = () => {
  const { theme, mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { getMe } = useActions();
  React.useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <div className='dashboard' style={{ backgroundColor: theme }}>
      <div className={`dashboard__panel ${mode}`}>
        <Sidenav />
        <div className='dashboard__main'>
          <Switch>
            <Route path='/dashboard/connections' component={Chat} />
            <Route path='/dashboard/profile-form' component={CreateProfile} />
            <Route path='/dashboard/signout' component={Signout} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
