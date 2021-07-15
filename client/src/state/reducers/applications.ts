import { AnyAction } from 'redux';
import { IError } from 'interfaces';
import { ApplicationActionTypes } from 'state/types';

interface ApplicationsState {
  loading: boolean;
  items: any[] | [];
  errors: IError[] | [];
}
const initialState = {
  loading: false,
  items: [],
  errors: [],
};

export const applications = (
  state: ApplicationsState = initialState,
  action: AnyAction
): ApplicationsState => {
  const { type, payload } = action;
  switch (type) {
    case ApplicationActionTypes.CREATE_APPLICATION_REQUEST:
    case ApplicationActionTypes.FETCH_APPLICATIONS_REQUEST:
      return { ...state, loading: true };

    case ApplicationActionTypes.CREATE_APPLICATION_SUCCESS:
      return { ...state, loading: false };

    case ApplicationActionTypes.CLEAR_APPLICATIONS:
    case ApplicationActionTypes.FETCH_APPLICATIONS_SUCCESS:
      return { ...state, items: payload, loading: false };

    case ApplicationActionTypes.FETCH_APPLICATIONS_FAILURE:
    case ApplicationActionTypes.CREATE_APPLICATION_FAILURE:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};
