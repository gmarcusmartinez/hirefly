import { AnyAction } from 'redux';
import { INotification, IError } from 'interfaces';
import { NotificationActionTypes } from 'state/types';

interface NotificationsState {
  loading: boolean;
  items: INotification[] | [];
  errors: IError[] | [];
}
const initialState = {
  loading: false,
  items: [],
  errors: [],
};

export const notifications = (
  state: NotificationsState = initialState,
  action: AnyAction
): NotificationsState => {
  const { type, payload } = action;
  switch (type) {
    case NotificationActionTypes.DELETE_NOTIFICATION_REQUEST:
    case NotificationActionTypes.FETCH_NOTIFICATIONS_REQUEST:
      return { ...state, loading: true };

    case NotificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      return { ...state, items: payload };

    case NotificationActionTypes.DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== payload),
      };

    case NotificationActionTypes.DELETE_NOTIFICATION_FAILURE:
    case NotificationActionTypes.FETCH_NOTIFICATIONS_FAILURE:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
