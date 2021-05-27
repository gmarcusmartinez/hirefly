import auth from 'api/auth';
import history from 'core/history';
import { Dispatch } from 'redux';
import { AuthActionTypes } from 'state';

const { SIGNOUT_FAILURE, SIGNOUT_SUCCESS } = AuthActionTypes;

export const signout = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: AuthActionTypes.SIGNOUT_REQUEST });
    const { data } = await auth.post('/signout');
    dispatch({ type: SIGNOUT_SUCCESS, payload: data });
    history.push('/');
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: SIGNOUT_FAILURE, payload: errorResponse });
  }
};
