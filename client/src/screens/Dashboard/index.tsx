import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { IMessage } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Sidenav } from 'components/dashboard/Sidenav';
import { useActions } from 'hooks/use-actions';
import { SocketActionTypes } from 'state';
import { SocketContext } from 'context/socket';
import { AlertContainer } from 'components/alerts/AlertContainer';
import * as s from 'screens';

export const Dashboard = () => {
  const socket = React.useContext(SocketContext);
  const { messageReceived, messageSent, getMe, setAlert } = useActions();
  const { theme, mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { currentUser } = useTypedSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getMe();
  }, [getMe]);

  React.useEffect(() => {
    socket.emit('init', currentUser!._id);
    // eslint-disable-next-line
  }, [currentUser]);

  React.useEffect(() => {
    socket.on('connected', () => {
      dispatch({ type: SocketActionTypes.SET_SOCKET, payload: true });
    });
    // eslint-disable-next-line
  }, [dispatch]);

  React.useEffect(() => {
    socket.on('notification received', (msg) => setAlert(msg, 'success'));
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    socket.on('message received', (msg: IMessage) => messageReceived(msg));
    // eslint-disable-next-line
  }, [messageReceived]);

  React.useEffect(() => {
    socket.on('message sent', (msg: IMessage) => messageSent(msg));
    // eslint-disable-next-line
  }, [messageSent]);

  return (
    <div className='dashboard' style={{ backgroundColor: theme }}>
      <div className={`dashboard__panel ${mode}`}>
        <Sidenav />
        <div className='dashboard__main'>
          <AlertContainer />
          <Switch>
            <Route path='/dashboard/applicants' component={s.Applicants} />
            <Route path='/dashboard/connections' component={s.Chat} />
            <Route path='/dashboard/edit-job' component={s.EditJob} />
            <Route path='/dashboard/jobs' component={s.Jobs} />
            <Route path='/dashboard/job-form' component={s.PostJob} />
            <Route path='/dashboard/my-jobs' component={s.MyJobs} />
            <Route
              path='/dashboard/notifications'
              component={s.Notifications}
            />
            <Route path='/dashboard/profile-form' component={s.CreateProfile} />
            <Route path='/dashboard/signout' component={s.Signout} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
