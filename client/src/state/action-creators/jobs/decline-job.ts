import jobs from 'api/jobs';
import { Dispatch } from 'redux';
import { JobActionTypes } from 'state';

const { SET_CURRENT_JOB } = JobActionTypes;

interface IArgs {
  current: number;
  last: number;
  jobId?: string;
}

export const declineJob =
  ({ current, last }: IArgs) =>
  async (dispatch: Dispatch) => {
    if (current === last) {
      dispatch({ type: JobActionTypes.GET_ALL_JOBS_REQUEST });
      const { data } = await jobs.get('/');
      dispatch({ type: JobActionTypes.GET_ALL_JOBS_SUCCESS, payload: data });

      dispatch({ type: SET_CURRENT_JOB, payload: 0 });
    } else {
      dispatch({ type: SET_CURRENT_JOB, payload: current + 1 });
    }
  };
