import { AnyAction } from 'redux';
import { IError, IProfile } from 'interfaces';
import { ProfileActionTypes } from '../types';

interface ProfileState {
  loading: boolean;
  errors: IError[] | null;
  selected: IProfile | null;
  me: IProfile | null;
}

const initialState = {
  loading: false,
  errors: null,
  selected: null,
  me: null,
};

export const profiles = (
  state: ProfileState = initialState,
  action: AnyAction
): ProfileState => {
  const { type, payload } = action;
  switch (type) {
    case ProfileActionTypes.GET_ME_REQUEST:
    case ProfileActionTypes.CREATE_PROFILE_REQUEST:
      return { ...state, loading: true };

    case ProfileActionTypes.CREATE_PROFILE_SUCCESS:
      return { ...state, loading: false, me: payload };

    case ProfileActionTypes.CREATE_PROFILE_FAILURE:
      return { ...state, loading: false, errors: payload };

    case ProfileActionTypes.GET_ME_SUCCESS:
    case ProfileActionTypes.GET_ME_FAILURE:
      return { ...state, loading: false, me: payload };

    default:
      return state;
  }
};
