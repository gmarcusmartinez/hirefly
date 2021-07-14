import applications from 'api/applications';
import { Dispatch } from 'redux';
import { ApplicationActionTypes } from 'state';

export const updateApplication =
  (id: string, status: string) => async (dispatch: Dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      dispatch({ type: ApplicationActionTypes.UPDATE_APPLICATION_REQUEST });
      const { data } = await applications.put(`/${id}`, { status }, config);

      dispatch({
        type: ApplicationActionTypes.UPDATE_APPLICATION_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: ApplicationActionTypes.UPDATE_APPLICATION_FAILURE,
        payload: null,
      });
    }
  };
