import { AnyAction } from 'redux';
import { IError, IProfile } from 'interfaces';
import { ProfileActionTypes } from '../types';

interface ProfileState {
  loading: boolean;
  errors: IError[] | null;
  selected: IProfile | null;
}

const initialState = {
  loading: false,
  errors: null,
  selected: null,
};

export const profiles = (
  state: ProfileState = initialState,
  action: AnyAction
): ProfileState => {
  const { type, payload } = action;
  switch (type) {
    case ProfileActionTypes.CREATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case ProfileActionTypes.CREATE_PROFILE_SUCCESS:
      return { ...state, loading: false, selected: payload };
    case ProfileActionTypes.CREATE_PROFILE_FAILURE:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};
