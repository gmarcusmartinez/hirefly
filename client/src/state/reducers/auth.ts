import { AnyAction } from 'redux';
import { IError, IUser } from 'interfaces';
import { AuthActionTypes } from '../types';

interface AuthState {
  loading: boolean;
  errors: IError[] | null;
  currentUser: IUser | null;
}

const initialState = {
  loading: false,
  errors: null,
  currentUser: null,
};

export const auth = (
  state: AuthState = initialState,
  action: AnyAction
): AuthState => {
  const { type, payload } = action;
  switch (type) {
    case AuthActionTypes.SIGNIN_REQUEST:
      return { ...state, loading: true };

    case AuthActionTypes.SIGNIN_SUCCESS:
      return { ...state, loading: false, currentUser: payload };

    case AuthActionTypes.GET_CURRENT_USER:
    case AuthActionTypes.SIGNOUT_SUCCESS:
      return { ...state, loading: false, currentUser: payload };

    case AuthActionTypes.SIGNIN_FAILURE:
    case AuthActionTypes.SIGNOUT_FAILURE:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};
