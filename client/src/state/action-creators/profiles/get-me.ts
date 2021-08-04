import { Dispatch } from 'redux';
import history from 'core/history';
import profiles from 'api/profiles';
import notifications from 'api/notifications';
import { ProfileActionTypes } from 'state';
import { DashboardActionTypes } from 'state/types';
import { NotificationActionTypes } from 'state/types';

const { SET_HEADER_TEXT } = DashboardActionTypes;
const { FETCH_NOTIFICATIONS_REQUEST, FETCH_NOTIFICATIONS_SUCCESS } =
  NotificationActionTypes;

export const getMe = (accountType: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ProfileActionTypes.GET_ME_REQUEST });
    const { data } = await profiles.get('/me');
    dispatch({ type: ProfileActionTypes.GET_ME_SUCCESS, payload: data });

    if (accountType === 'applicant') {
      history.push('/dashboard/jobs');
      dispatch({ type: SET_HEADER_TEXT, payload: 'Jobs' });
    }

    if (accountType === 'recruiter') {
      history.push('/dashboard/my-jobs');
      dispatch({ type: SET_HEADER_TEXT, payload: 'My Jobs' });
    }

    dispatch({ type: FETCH_NOTIFICATIONS_REQUEST });
    const res = await notifications.get('/');
    dispatch({ type: FETCH_NOTIFICATIONS_SUCCESS, payload: res.data });
  } catch (e) {
    history.push('/dashboard/create-profile');
    dispatch({ type: SET_HEADER_TEXT, payload: 'Create Profile' });
    dispatch({ type: ProfileActionTypes.GET_ME_FAILURE, payload: null });
    dispatch({ type: DashboardActionTypes.SET_COMPONENT, payload: 'LINKS' });
  }
};
