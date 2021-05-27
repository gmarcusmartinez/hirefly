import { Dispatch } from 'redux';
import { DashboardActionTypes } from 'state';

export const setTheme = (theme: string) => (dispatch: Dispatch) => {
  dispatch({
    type: DashboardActionTypes.SET_THEME,
    payload: theme,
  });
};
