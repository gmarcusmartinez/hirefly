import { Dispatch } from 'redux';
import jobs from 'api/jobs';
import { JobActionTypes } from 'state/types';

export const getAllJobs = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: JobActionTypes.GET_ALL_JOBS_REQUEST });
    const { data } = await jobs.get('/');
    dispatch({ type: JobActionTypes.GET_ALL_JOBS_SUCCESS, payload: data });
    console.log(data);
  } catch (e) {
    const errors = e.response.data.errors || e.message;
    dispatch({ type: JobActionTypes.GET_ALL_JOBS_FAILURE, payload: errors });
    return;
  }
};
