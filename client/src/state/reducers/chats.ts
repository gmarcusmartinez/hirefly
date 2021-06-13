import { AnyAction } from 'redux';
import { ChatActionTypes } from '../types';
import { IChatItem, IError } from 'interfaces';

interface ChatsState {
  loading: boolean;
  items: IChatItem[] | null;
  errors: IError[] | null;
}
const initialState = {
  loading: false,
  items: [],
  errors: [],
};

export const chats = (
  state: ChatsState = initialState,
  action: AnyAction
): ChatsState => {
  const { type, payload } = action;
  switch (type) {
    case ChatActionTypes.FETCH_CHATS_REQUEST:
      return { ...state, items: [], errors: [], loading: true };
    case ChatActionTypes.FETCH_CHATS_SUCCESS:
      return { ...state, items: payload, errors: [], loading: false };
    case ChatActionTypes.FETCH_CHATS_FAILURE:
      return { ...state, items: [], errors: payload, loading: false };
    default:
      return state;
  }
};
