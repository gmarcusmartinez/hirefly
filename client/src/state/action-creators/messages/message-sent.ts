import { IMessage } from 'interfaces';
import { Dispatch } from 'redux';
import { MessageActionTypes } from 'state/types';

export const messageSent = (message: IMessage) => (dispatch: Dispatch) => {
  dispatch({ type: MessageActionTypes.MESSAGE_SENT, payload: message });
};
