import { AnyAction } from 'redux';
import { MessageActionTypes } from '../types';
import { IMessage, IError } from 'interfaces';

interface MessagesState {
  loading: boolean;
  items: IMessage[] | [];
  errors: IError[] | null;
  newMessage: IMessage | null;
}
const initialState = {
  loading: false,
  items: [],
  errors: [],
  newMessage: null,
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
    case MessageActionTypes.CREATE_MESSAGE_FAILURE:
      return { ...state, items: [], errors: payload, loading: false };

    case MessageActionTypes.MESSAGE_RECIEVED:
    case MessageActionTypes.MESSAGE_SENT:
      return { ...state, items: [...state.items, payload] };

    default:
      return state;
  }
};
