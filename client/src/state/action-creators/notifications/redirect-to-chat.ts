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

const { SET_COMPONENT } = DashboardActionTypes;
const { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILURE } = MessageActionTypes;

export const redirectToChat =
  (entityId: string, currentUserId: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ChatActionTypes.SET_CHAT_ID, payload: entityId });

      const res = await chats.get(`/${entityId}`);
      const partner = res.data.users.find(
        (user: IUser) => user._id !== currentUserId
      );

      dispatch({ type: ChatActionTypes.SET_HEADER, payload: partner });

      dispatch({ type: MessageActionTypes.FETCH_MESSAGES_REQUEST });
      const { data } = await messages.get(`/${entityId}`);
      dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: data });

      dispatch({ type: SET_COMPONENT, payload: 'CHATS' });
      history.push('/dashboard/connections');
    } catch (e) {
      dispatch({ type: FETCH_MESSAGES_FAILURE, payload: null });
    }
  };
