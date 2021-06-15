import { Dispatch } from 'redux';
import { ChatActionTypes } from 'state';

export const setChatId = (chatId: string) => (dispatch: Dispatch) => {
  dispatch({ type: ChatActionTypes.SET_CHAT_ID, payload: chatId });
};
