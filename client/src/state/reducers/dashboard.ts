import { AnyAction } from 'redux';
import { DashboardActionTypes } from '../types';

interface DashboardState {
  sidenavComponent: string;
  expanded: boolean;
  mode: string;
  header: string;
}

const initialState = {
  sidenavComponent: 'SETTINGS',
  expanded: false,
  mode: 'darkmode',
  header: '',
};

export const dashboard = (
  state: DashboardState = initialState,
  action: AnyAction
): DashboardState => {
  const { type, payload } = action;

  switch (type) {
    case DashboardActionTypes.SET_COMPONENT:
      return { ...state, sidenavComponent: payload };
    case DashboardActionTypes.SET_EXPAND:
      return { ...state, expanded: payload };
    case DashboardActionTypes.TOGGLE_MODE:
      return { ...state, mode: payload };
    case DashboardActionTypes.SET_HEADER_TEXT:
      return { ...state, header: payload };
    default:
      return state;
  }
};
