import { AnyAction } from 'redux';
import { DashboardActionTypes } from '../types';

interface DashboardState {
  sidenavComponent: string;
  expand: boolean;
  darkmode: boolean;
  theme: string;
}

const initialState = {
  sidenavComponent: 'MESSAGES',
  expand: false,
  darkmode: false,
  theme: 'lavender',
};

export const dashboard = (
  state: DashboardState = initialState,
  action: AnyAction
): DashboardState => {
  const { type, payload } = action;

  switch (type) {
    case DashboardActionTypes.SET_EXPAND:
      return { ...state, expand: payload };
    case DashboardActionTypes.SET_COMPONENT:
      return { ...state, sidenavComponent: payload };
    default:
      return state;
  }
};
