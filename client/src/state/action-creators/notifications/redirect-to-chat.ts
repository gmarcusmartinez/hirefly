import messages from 'api/messages';
import history from 'core/history';
import { IChatItem, IUser } from 'interfaces';
import { Dispatch } from 'redux';
import {
  ChatActionTypes,
  DashboardActionTypes,
  MessageActionTypes,
} from 'state';

const { SET_COMPONENT } = DashboardActionTypes;
const { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILURE } = MessageActionTypes;

export const redirectToChat =
  (chatId: string, chat: IChatItem, currentUser: IUser) =>
  async (dispatch: Dispatch) => {
    try {
      const partner = chat.users.find((user) => user._id !== currentUser?._id);
      dispatch({ type: ChatActionTypes.SET_HEADER, payload: partner });

      dispatch({ type: ChatActionTypes.SET_CHAT_ID, payload: chatId });
      dispatch({ type: MessageActionTypes.FETCH_MESSAGES_REQUEST });

      const { data } = await messages.get(`/${chatId}`);
      dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: data });

      dispatch({ type: SET_COMPONENT, payload: 'MESSAGES' });
      history.push('/dashboard/connections');
    } catch (e) {
      dispatch({ type: FETCH_MESSAGES_FAILURE, payload: null });
    }
  };
