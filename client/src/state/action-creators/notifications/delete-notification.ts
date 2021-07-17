import notifications from 'api/notifications';
import { Dispatch } from 'redux';
import { NotificationActionTypes } from 'state';

const { DELETE_NOTIFICATION_FAILURE, DELETE_NOTIFICATION_SUCCESS } =
  NotificationActionTypes;

export const deleteNotification =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: NotificationActionTypes.DELETE_NOTIFICATION_REQUEST });
      const { data } = await notifications.delete(`/${id}`);
      dispatch({ type: DELETE_NOTIFICATION_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: DELETE_NOTIFICATION_FAILURE, payload: null });
    }
  };
