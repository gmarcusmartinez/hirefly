import { Dispatch } from 'redux';
import { ApplicationActionTypes } from 'state/types';

export const clearApplications = () => (dispatch: Dispatch) => {
  dispatch({ type: ApplicationActionTypes.CLEAR_APPLICATIONS, payload: [] });
};
