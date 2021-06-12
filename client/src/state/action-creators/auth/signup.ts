import auth from 'api/auth';
import { Dispatch } from 'redux';
import { AuthActionTypes } from 'state';

interface FormData {
  email: string;
  password: string;
}
const { GET_CURRENT_USER } = AuthActionTypes;

export const signup = (formData: FormData) => async (dispatch: Dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: AuthActionTypes.SIGNIN_REQUEST });
    await auth.post('/signup', { ...formData }, config);
    dispatch({ type: AuthActionTypes.SIGNIN_SUCCESS });

    const { data } = await auth.get('/currentUser');
    dispatch({ type: GET_CURRENT_USER, payload: data.currentUser });
  } catch (e) {
    const payload = e.response.data.errors;
    dispatch({ type: AuthActionTypes.SIGNIN_FAILURE, payload });
    setTimeout(() => {
      dispatch({ type: AuthActionTypes.SIGNIN_FAILURE, payload: [] });
    }, 2000);
  }
};
