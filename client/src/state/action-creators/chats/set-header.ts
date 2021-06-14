import { Dispatch } from 'redux';
import { ProfileSubDoc } from 'interfaces';
import { ChatActionTypes } from 'state';

export const setHeader = (partner: ProfileSubDoc) => (dispatch: Dispatch) => {
  dispatch({ type: ChatActionTypes.SET_HEADER, payload: partner });
};
