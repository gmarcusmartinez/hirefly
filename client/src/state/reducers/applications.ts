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
      return { ...state, loading: true };

    case ApplicationActionTypes.CREATE_APPLICATION_SUCCESS:
      return { ...state, loading: false };

    case ApplicationActionTypes.CREATE_APPLICATION_FAILURE:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
