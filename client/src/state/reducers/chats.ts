import { AnyAction } from 'redux';
import { ChatActionTypes } from '../types';
import { IChatItem, IError, ProfileSubDoc, IMessage } from 'interfaces';

interface ChatsState {
  loading: boolean;
  chatItems: IChatItem[] | [];
  messageItems: IMessage[] | [];
  header: ProfileSubDoc | null;
  selectedChatId: string;
  socket: any;
  chatErrors: IError[] | null;
}
const initialState = {
  loading: false,
  chatItems: [],
  messageItems: [],
  header: null,
  selectedChatId: '',
  socket: {},
  chatErrors: [],
};

export const chats = (
  state: ChatsState = initialState,
  action: AnyAction
): ChatsState => {
  const { type, payload } = action;
  switch (type) {
    case ChatActionTypes.FETCH_CHATS_REQUEST:
      return { ...state, chatItems: [], chatErrors: [], loading: true };
    case ChatActionTypes.FETCH_CHATS_SUCCESS:
      return { ...state, chatItems: payload, chatErrors: [], loading: false };
    case ChatActionTypes.FETCH_CHATS_FAILURE:
      return { ...state, chatItems: [], chatErrors: payload, loading: false };
    case ChatActionTypes.SET_HEADER:
      return { ...state, header: payload };
    case ChatActionTypes.SET_CHAT_ID:
      return { ...state, selectedChatId: payload };
    case ChatActionTypes.CONNECT_TO_SOCKET:
      return { ...state, socket: payload };

    default:
      return state;
  }
};
