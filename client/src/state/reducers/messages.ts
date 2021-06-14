import { AnyAction } from 'redux';
import { MessageActionTypes } from '../types';
import { IMessage, IError } from 'interfaces';

interface MessagesState {
  loading: boolean;
  items: IMessage[] | [];
  errors: IError[] | null;
}
const initialState = {
  loading: false,
  items: [],
  errors: [],
};

export const messages = (
  state: MessagesState = initialState,
  action: AnyAction
): MessagesState => {
  const { type, payload } = action;
  switch (type) {
    case MessageActionTypes.FETCH_MESSAGES_REQUEST:
      return { ...state, items: [], errors: [], loading: true };
    case MessageActionTypes.FETCH_MESSAGES_SUCCESS:
      return { ...state, items: payload, errors: [], loading: false };
    case MessageActionTypes.FETCH_MESSAGES_FAILURE:
      return { ...state, items: [], errors: payload, loading: false };
    default:
      return state;
  }
};
