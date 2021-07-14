import { AnyAction } from 'redux';
import { IError, IProfile } from 'interfaces';
import { ProfileActionTypes } from '../types';

interface ProfileState {
  loading: boolean;
  errors: IError[] | [];
  selected: IProfile | null;
  me: IProfile | null;
}

const initialState = {
  loading: false,
  errors: [],
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
    case ProfileActionTypes.UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };

    case ProfileActionTypes.CREATE_PROFILE_SUCCESS:
    case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, me: payload };

    case ProfileActionTypes.CREATE_PROFILE_FAILURE:
    case ProfileActionTypes.UPDATE_PROFILE_FAILURE:
      return { ...state, loading: false, errors: payload };

    case ProfileActionTypes.GET_ME_SUCCESS:
    case ProfileActionTypes.GET_ME_FAILURE:
      return { ...state, loading: false, me: payload };

    default:
      return state;
  }
};
