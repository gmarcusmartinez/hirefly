import { AnyAction } from 'redux';
import { ModalActionTypes } from 'state/types';

interface ModalState {
  displayModal: boolean;
  component: string;
  data: any;
}

const initialState = {
  displayModal: false,
  component: '',
  data: null,
};

export const modal = (
  state: ModalState = initialState,
  action: AnyAction
): ModalState => {
  const { type, payload } = action;
  switch (type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return {
        displayModal: payload.bool,
        component: payload.component,
        data: payload.data,
      };
    default:
      return state;
  }
};
