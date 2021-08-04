import { Dispatch } from 'redux';
import { DashboardActionTypes } from 'state';

export const setHeaderText = (text: string) => (dispatch: Dispatch) =>
  dispatch({ type: DashboardActionTypes.SET_HEADER_TEXT, payload: text });
