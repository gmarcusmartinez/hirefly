import { IMessage } from 'interfaces';
import { Dispatch } from 'redux';
import { MessageActionTypes } from 'state/types';

export const messageReceived = (message: IMessage) => (dispatch: Dispatch) => {
  dispatch({ type: MessageActionTypes.MESSAGE_RECIEVED, payload: message });
};
