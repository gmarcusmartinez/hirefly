import { Dispatch } from 'redux';
import { AuthActionTypes } from 'state';

export const resetErrors = () => (dispatch: Dispatch) => {
  dispatch({
    type: AuthActionTypes.RESET_ERRORS,
    payload: [],
  });
};
