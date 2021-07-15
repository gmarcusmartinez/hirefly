import { Dispatch } from 'redux';
import { JobActionTypes } from 'state/types';

export const clearJobs = () => (dispatch: Dispatch) => {
  dispatch({ type: JobActionTypes.CLEAR_JOBS, payload: [] });
};
