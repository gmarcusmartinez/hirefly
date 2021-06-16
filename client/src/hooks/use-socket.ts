import React from 'react';
import io from 'socket.io-client';
import { Dispatch } from 'redux';
import { IMessage, IUser } from 'interfaces';
import { MessageActionTypes, SocketActionTypes } from 'state';

export const useSocket = (user: IUser, dispatch: Dispatch) => {
  let socket = React.useRef<any>(null);

  React.useEffect(() => {
    socket.current = io('http://localhost:5000/');
    socket.current.emit('init', user._id);

    socket.current.on('connected', () => {
      dispatch({ type: SocketActionTypes.SET_SOCKET, payload: true });
    });

    // Create Message for Receiver
    socket.current.on('message received', (msg: IMessage) => {
      dispatch({ type: MessageActionTypes.MESSAGE_RECIEVED, payload: msg });
    });
  }, [dispatch, user._id]);

  return socket;
};
