import notifications from 'api/notifications';
import { Dispatch } from 'redux';
import { NotificationActionTypes } from 'state';

const {
  MARK_NOTIFICATIONS_AS_READ_REQUEST,
  MARK_NOTIFICATIONS_AS_READ_SUCCESS,
  MARK_NOTIFICATIONS_AS_READ_FAILURE,
} = NotificationActionTypes;

export const markAsRead = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: MARK_NOTIFICATIONS_AS_READ_REQUEST });
    await notifications.put(`/mark-as-read`);
    dispatch({ type: MARK_NOTIFICATIONS_AS_READ_SUCCESS, payload: 0 });
  } catch (e) {
    dispatch({ type: MARK_NOTIFICATIONS_AS_READ_FAILURE, payload: null });
  }
};
