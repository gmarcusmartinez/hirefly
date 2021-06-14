import { AnyAction } from 'redux';
import { ChatActionTypes } from '../types';
import { IChatItem, IError, ProfileSubDoc } from 'interfaces';

interface ChatsState {
  loading: boolean;
  items: IChatItem[] | null;
  errors: IError[] | null;
  header: ProfileSubDoc | null;
}
const initialState = {
  loading: false,
  items: [],
  errors: [],
  header: null,
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
    case ChatActionTypes.SET_HEADER:
      return { ...state, header: payload };
    default:
      return state;
  }
};
