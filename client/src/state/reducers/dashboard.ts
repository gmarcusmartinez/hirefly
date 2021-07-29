import { AnyAction } from 'redux';
import { DashboardActionTypes } from '../types';

interface DashboardState {
  sidenavComponent: string;
  expanded: boolean;
  mode: string;
}

const initialState = {
  sidenavComponent: 'MESSAGES',
  expanded: false,
  mode: 'darkmode',
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
    default:
      return state;
  }
};
