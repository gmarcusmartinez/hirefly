import { Dispatch } from 'redux';
import { AlertActionTypes } from 'state';
import { v4 } from 'uuid';

export const setAlert =
  (msg: string, alertType: string) => (dispatch: Dispatch) => {
    const id = v4();
    dispatch({
      type: AlertActionTypes.SET_ALERT,
      payload: { msg, id, alertType },
    });
    setTimeout(() => {
      dispatch({
        type: AlertActionTypes.REMOVE_ALERT,
        payload: id,
      });
    }, 2000);
  };
