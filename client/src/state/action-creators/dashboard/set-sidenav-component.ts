import { Dispatch } from 'redux';
import { DashboardActionTypes } from 'state';

export const setSidenavComponent =
  (component: string) => (dispatch: Dispatch) => {
    dispatch({
      type: DashboardActionTypes.SET_COMPONENT,
      payload: component,
    });
  };
