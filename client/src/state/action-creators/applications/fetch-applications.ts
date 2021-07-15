import applications from 'api/applications';
import { Dispatch } from 'redux';
import { ApplicationActionTypes } from 'state';

const { FETCH_APPLICATIONS_FAILURE } = ApplicationActionTypes;

export const fetchApplications =
  (jobId: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ApplicationActionTypes.FETCH_APPLICATIONS_REQUEST });
      const { data } = await applications.get(`/${jobId}`);
      dispatch({
        type: ApplicationActionTypes.FETCH_APPLICATIONS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      const payload = e.response.data.errors;
      dispatch({ type: FETCH_APPLICATIONS_FAILURE, payload });
      setTimeout(() => {
        dispatch({ type: FETCH_APPLICATIONS_FAILURE, payload: [] });
      }, 2000);
    }
  };
