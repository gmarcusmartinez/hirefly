import { Dispatch } from 'redux';
import { NavActionTypes } from 'state';

export const toggleNav = (bool: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: NavActionTypes.TOGGLE_NAV, payload: bool });
};
