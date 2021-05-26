import { Dispatch } from 'redux';
import { DashboardActionTypes } from 'state';

export const toggleSidenav = (bool: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: DashboardActionTypes.SET_EXPAND,
    payload: bool,
  });
};
