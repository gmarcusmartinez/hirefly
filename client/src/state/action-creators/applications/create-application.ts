import { v4 } from 'uuid';
import applications from 'api/applications';
import jobs from 'api/jobs';
import { Dispatch } from 'redux';
import { ApplicationActionTypes } from 'state';
import { JobActionTypes } from 'state';
import { AlertActionTypes } from 'state';

const { CREATE_APPLICATION_FAILURE } = ApplicationActionTypes;
const { SET_CURRENT_JOB } = JobActionTypes;

interface IArgs {
  current: number;
  last: number;
  jobId: string;
}

export const createApplication =
  ({ current, last, jobId }: IArgs) =>
  async (dispatch: Dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      // dispatch({ type: ApplicationActionTypes.CREATE_APPLICATION_REQUEST });
      // await applications.post('/', { jobId }, config);
      // dispatch({ type: ApplicationActionTypes.CREATE_APPLICATION_SUCCESS });

      if (current === last) {
        dispatch({ type: JobActionTypes.GET_ALL_JOBS_REQUEST });
        const { data } = await jobs.get('/');
        dispatch({ type: JobActionTypes.GET_ALL_JOBS_SUCCESS, payload: data });

        dispatch({ type: SET_CURRENT_JOB, payload: 0 });
      } else {
        dispatch({ type: SET_CURRENT_JOB, payload: current + 1 });
      }

      const msg = 'Applicantion Successfully Sent!';
      const id = v4();
      dispatch({
        type: AlertActionTypes.SET_ALERT,
        payload: { msg, id, alertType: 'success' },
      });
      setTimeout(() => {
        dispatch({
          type: AlertActionTypes.REMOVE_ALERT,
          payload: id,
        });
      }, 500);
    } catch (e) {
      const payload = e.response.data.errors;
      dispatch({ type: CREATE_APPLICATION_FAILURE, payload });
      setTimeout(() => {
        dispatch({ type: CREATE_APPLICATION_FAILURE, payload: [] });
      }, 2000);
    }
  };
