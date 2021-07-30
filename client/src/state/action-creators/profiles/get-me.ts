import { Dispatch } from 'redux';
import profiles from 'api/profiles';
import { ProfileActionTypes } from 'state';
import history from 'core/history';
import { DashboardActionTypes } from 'state/types';

export const getMe = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ProfileActionTypes.GET_ME_REQUEST });
    const { data } = await profiles.get('/me');
    dispatch({ type: ProfileActionTypes.GET_ME_SUCCESS, payload: data });
    history.push('/dashboard/jobs');
  } catch (e) {
    history.push('/dashboard/create-profile');
    dispatch({ type: ProfileActionTypes.GET_ME_FAILURE, payload: null });
    dispatch({ type: DashboardActionTypes.SET_COMPONENT, payload: 'SETTINGS' });
  }
};
