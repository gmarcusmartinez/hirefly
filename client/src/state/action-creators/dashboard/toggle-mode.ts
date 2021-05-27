import { Dispatch } from 'redux';
import { DashboardActionTypes } from 'state';

export const toggleMode = (mode: string) => (dispatch: Dispatch) => {
  dispatch({
    type: DashboardActionTypes.TOGGLE_MODE,
    payload: mode,
  });
};
