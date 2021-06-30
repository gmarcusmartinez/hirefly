import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { IMessage } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { CreateProfile } from 'screens/Profile';
import { Sidenav } from 'components/dashboard/Sidenav';
import { useActions } from 'hooks/use-actions';
import { Signout } from 'screens/Signout';
import { Chat } from 'screens/Chat';
import { PostJob } from 'screens/PostJob';
import { SocketActionTypes } from 'state';
import { SocketContext } from 'context/socket';

export const Dashboard = () => {
  const socket = React.useContext(SocketContext);
  const { messageReceived, messageSent, getMe } = useActions();
  const { selectedChatId } = useTypedSelector((state) => state.chats);
  const { theme, mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { currentUser } = useTypedSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getMe();
  }, [getMe]);

  React.useEffect(() => {
    socket.emit('init', currentUser!._id);
  }, [currentUser]);

  React.useEffect(() => {
    socket.on('connected', () => {
      dispatch({ type: SocketActionTypes.SET_SOCKET, payload: true });
    });
  }, [dispatch]);

  React.useEffect(() => {
    socket.on('message received', (msg: IMessage) => messageReceived(msg));
    return () => {
      socket.off('message received', (msg: IMessage) => messageReceived(msg));
    };
    // eslint-disable-next-line
  }, [messageReceived]);

  React.useEffect(() => {
    socket.on('message sent', (msg: IMessage) => messageSent(msg));
    return () => {
      socket.off('message sent', (msg: IMessage) => messageSent(msg));
    };
    // eslint-disable-next-line
  }, [messageSent]);

  React.useEffect(() => {
    socket.emit('join room', selectedChatId);
    return () => {
      socket.emit('leave room', selectedChatId);
    };
  }, [selectedChatId]);

  return (
    <div className='dashboard' style={{ backgroundColor: theme }}>
      <div className={`dashboard__panel ${mode}`}>
        <Sidenav />
        <div className='dashboard__main'>
          <Switch>
            <Route path='/dashboard/connections' component={Chat} />
            <Route path='/dashboard/profile-form' component={CreateProfile} />
            <Route path='/dashboard/signout' component={Signout} />
            <Route path='/dashboard/job-form' component={PostJob} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
