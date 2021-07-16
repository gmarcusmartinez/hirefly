import { AnyAction } from 'redux';
import { ChatActionTypes, MessageActionTypes } from '../types';
import { IChatItem, IError, ProfileSubDoc, IMessage } from 'interfaces';
import { updateMessages } from 'utils/update-messages';

interface ChatsState {
  loading: boolean;
  chatItems: IChatItem[] | [];
  messageItems: IMessage[] | [];
  header: ProfileSubDoc | null;
  selectedChatId: string;
  socket: any;
  errors: IError[] | null;
}
const initialState = {
  loading: false,
  chatItems: [],
  messageItems: [],
  header: null,
  selectedChatId: '',
  socket: {},
  errors: [],
};

export const chats = (
  state: ChatsState = initialState,
  action: AnyAction
): ChatsState => {
  const { type, payload } = action;
  switch (type) {
    case ChatActionTypes.FETCH_CHATS_REQUEST:
      return { ...state, chatItems: [], errors: [], loading: true };
    case ChatActionTypes.FETCH_CHATS_SUCCESS:
      return { ...state, chatItems: payload, errors: [], loading: false };
    case ChatActionTypes.FETCH_CHATS_FAILURE:
      return { ...state, chatItems: [], errors: payload, loading: false };
    case ChatActionTypes.SET_HEADER:
      return { ...state, header: payload };
    case ChatActionTypes.SET_CHAT_ID:
      return { ...state, selectedChatId: payload };
    case ChatActionTypes.CONNECT_TO_SOCKET:
      return { ...state, socket: payload };

    case MessageActionTypes.FETCH_MESSAGES_REQUEST:
      return { ...state, messageItems: [], errors: [], loading: true };
    case MessageActionTypes.FETCH_MESSAGES_SUCCESS:
      return { ...state, messageItems: payload, errors: [], loading: false };
    case MessageActionTypes.FETCH_MESSAGES_FAILURE:
      return { ...state, messageItems: [], errors: payload, loading: false };

    case MessageActionTypes.MESSAGE_RECIEVED:
    case MessageActionTypes.MESSAGE_SENT:
      if (state.selectedChatId === payload.chat) {
        return {
          ...state,
          messageItems: updateMessages(state.messageItems, payload),
        };
      } else return state;

    default:
      return state;
  }
};
