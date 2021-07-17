import notifications from 'api/notifications';
import { Dispatch } from 'redux';
import { NotificationActionTypes } from 'state';

const { FETCH_NOTIFICATIONS_FAILURE } = NotificationActionTypes;

export const fetchNotifications = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: NotificationActionTypes.FETCH_NOTIFICATIONS_REQUEST });
    const { data } = await notifications.get(`/`);
    dispatch({
      type: NotificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({ type: FETCH_NOTIFICATIONS_FAILURE, payload: null });
  }
};
