import auth from 'api/auth';
import { IUser } from 'interfaces';
import { Dispatch } from 'redux';
import { AuthActionTypes } from 'state';

export interface GetCurrentUserAction {
  type: AuthActionTypes.GET_CURRENT_USER;
  payload: IUser | null;
}

export const getCurrentUser = () => async (dispatch: Dispatch) => {
  const { data } = await auth.get('/currentuser');
  dispatch({
    type: AuthActionTypes.GET_CURRENT_USER,
    payload: data.currentUser,
  });
};
