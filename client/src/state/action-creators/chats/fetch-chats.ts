import chats from 'api/chats';
import { Dispatch } from 'redux';
import { ChatActionTypes } from 'state';

export const fetchChats = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ChatActionTypes.FETCH_CHATS_REQUEST });
    const { data } = await chats.get('/');
    dispatch({ type: ChatActionTypes.FETCH_CHATS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ChatActionTypes.FETCH_CHATS_FAILURE, payload: null });
  }
};
