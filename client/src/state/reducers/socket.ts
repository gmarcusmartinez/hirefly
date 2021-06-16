import { AnyAction } from 'redux';
import { SocketActionTypes } from 'state/types';

interface SocketState {
  connected: boolean;
}

const initialState = {
  connected: false,
};

export const socket = (
  state: SocketState = initialState,
  action: AnyAction
): SocketState => {
  const { type, payload } = action;
  switch (type) {
    case SocketActionTypes.SET_SOCKET:
      return { ...state, connected: payload };

    default:
      return state;
  }
};
