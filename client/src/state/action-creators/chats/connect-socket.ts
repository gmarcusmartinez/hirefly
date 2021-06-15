import { Dispatch } from 'redux';
import { ChatActionTypes } from 'state';

export const connectSocket = () => (dispatch: Dispatch) => {
  dispatch({ type: ChatActionTypes.CONNECT_TO_SOCKET });
};
