import React from 'react';
import io from 'socket.io-client';
import { Dispatch } from 'redux';
import { IMessage, IUser } from 'interfaces';
import { useActions } from './use-actions';
import { MessageActionTypes } from 'state';

export const useSocket = (user: IUser, dispatch: Dispatch) => {
  let socket = React.useRef<any>(null);
  const { connectSocket } = useActions();

  React.useEffect(() => {
    socket.current = io('http://localhost:5000/');
    socket.current.emit('init', user._id);
    socket.current.on('connected', () => connectSocket(socket));

    // Create Message for Receiver
    socket.current.on('message received', (msg: IMessage) => {
      dispatch({ type: MessageActionTypes.MESSAGE_RECIEVED, payload: msg });
    });
  }, []);

  return socket;
};
