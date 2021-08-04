import messages from 'api/messages';
import history from 'core/history';
import { IUser } from 'interfaces';
import { Dispatch } from 'redux';
import chats from 'api/chats';
import {
  ChatActionTypes,
  DashboardActionTypes,
  MessageActionTypes,
} from 'state';

const { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILURE } = MessageActionTypes;

export const setChat =
  (chatId: string, currentUserId: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ChatActionTypes.SET_CHAT_ID, payload: chatId });

      const { data } = await chats.get(`/${chatId}`);
      const partner = data.users.find((u: IUser) => u._id !== currentUserId);
      dispatch({ type: ChatActionTypes.SET_HEADER, payload: partner });

      dispatch({ type: MessageActionTypes.FETCH_MESSAGES_REQUEST });
      const res = await messages.get(`/${chatId}`);
      dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: res.data });

      dispatch({ type: DashboardActionTypes.SET_EXPAND, payload: false });
      history.push('/dashboard/connections');
    } catch (e) {
      dispatch({ type: FETCH_MESSAGES_FAILURE, payload: null });
    }
  };
