import applications from 'api/applications';
import { Dispatch } from 'redux';
import { ApplicationActionTypes } from 'state';

const { CREATE_APPLICATION_FAILURE } = ApplicationActionTypes;

export const createApplication =
  (jobId: string) => async (dispatch: Dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      dispatch({ type: ApplicationActionTypes.CREATE_APPLICATION_REQUEST });
      await applications.post('/', { jobId }, config);
      dispatch({ type: ApplicationActionTypes.CREATE_APPLICATION_SUCCESS });
    } catch (e) {
      const payload = e.response.data.errors;
      dispatch({ type: CREATE_APPLICATION_FAILURE, payload });
      setTimeout(() => {
        dispatch({ type: CREATE_APPLICATION_FAILURE, payload: [] });
      }, 2000);
    }
  };
