import messages from 'api/messages';
import { Dispatch } from 'redux';
import { MessageActionTypes } from 'state';

export const createMessage =
  (chatId: string, content: string) => async (dispatch: Dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      dispatch({ type: MessageActionTypes.CREATE_MESSAGE_REQUEST });
      const body = { chatId, content };
      await messages.post(`/`, body, config);
      // dispatch({
      //   type: MessageActionTypes.CREATE_MESSAGE_SUCCESS,
      //   payload: data,
      // });
    } catch (e) {
      dispatch({
        type: MessageActionTypes.CREATE_MESSAGE_FAILURE,
        payload: null,
      });
    }
  };
