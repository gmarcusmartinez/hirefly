import { Dispatch } from 'redux';
import { ModalActionTypes } from 'state';

export const toggleModal = (
  bool: boolean,
  component: string | null,
  data?: any
) => (dispatch: Dispatch) => {
  dispatch({
    type: ModalActionTypes.TOGGLE_MODAL,
    payload: { bool, component, data },
  });
};
