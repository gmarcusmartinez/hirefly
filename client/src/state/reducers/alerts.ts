import { AnyAction } from 'redux';
import { AlertActionTypes } from 'state/types';
import { IAlert } from 'interfaces';

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
    default:
      return state;
  }
};
