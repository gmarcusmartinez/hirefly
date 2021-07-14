import { Dispatch } from 'redux';
import jobs from 'api/jobs';
import { JobActionTypes } from 'state/types';

export const getPostedJobs = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: JobActionTypes.GET_POSTED_JOBS_REQUEST });
    const { data } = await jobs.get('/my-jobs');
    dispatch({ type: JobActionTypes.GET_POSTED_JOBS_SUCCESS, payload: data });
  } catch (e) {
    const errors = e.response.data.errors || e.message;
    dispatch({ type: JobActionTypes.GET_POSTED_JOBS_FAILURE, payload: errors });
    console.log(errors);
    return;
  }
};
