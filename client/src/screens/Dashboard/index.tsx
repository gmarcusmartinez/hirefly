import React from 'react';
import { useDispatch } from 'react-redux';
import { IMessage } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { DashboardNav } from 'components/dashboard/DashboardNav';
import { useActions } from 'hooks/use-actions';
import { SocketActionTypes } from 'state';
import { SocketContext } from 'context/socket';
import { AlertContainer } from 'components/alerts/AlertContainer';
import { DashboardRoutes } from './routes';
import { DashHeader } from 'components/common/DashHeader';
import { ChatHeader } from 'components/chat/Header';
import { useHistory } from 'react-router-dom';

export const Dashboard = () => {
  const socket = React.useContext(SocketContext);
  const { messageReceived, messageSent, getMe, setAlert } = useActions();
  const dispatch = useDispatch();
  const { currentUser } = useTypedSelector(({ auth }) => auth);
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  React.useEffect(() => {
    getMe(currentUser!.accountType);
  }, [getMe, currentUser]);

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

  const history = useHistory();
  const path = history.location.pathname.split('/')[2];

  return (
    <div className={`dashboard ${mode}`}>
      <DashboardNav />
      {path === 'messenger' ? <ChatHeader /> : <DashHeader />}
      <div className='dashboard__main'>
        <AlertContainer />
        <DashboardRoutes />
      </div>
    </div>
  );
};
