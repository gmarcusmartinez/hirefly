import { AnyAction } from 'redux';
import { IAlert } from 'interfaces';
import { AlertActionTypes } from 'state/types';

interface AlertsState {
  items: IAlert[];
}

const initialState = {
  items: [],
};

export const alerts = (
  state: AlertsState = initialState,
  action: AnyAction
): AlertsState => {
  const { type, payload } = action;
  switch (type) {
    case AlertActionTypes.SET_ALERT:
      return { ...state, items: [...state.items, payload] };

    case AlertActionTypes.REMOVE_ALERT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
