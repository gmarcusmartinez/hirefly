import messages from 'api/messages';
import { Dispatch } from 'redux';
import { MessageActionTypes } from 'state';

export const fetchMessages = (chatId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_REQUEST });
    const { data } = await messages.get(`/${chatId}`);
    dispatch({
      type: MessageActionTypes.FETCH_MESSAGES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: MessageActionTypes.FETCH_MESSAGES_FAILURE,
      payload: null,
    });
  }
};
