import { Dispatch } from 'redux';
import { JobActionTypes } from 'state/types';
import { IJob } from 'interfaces';

export const setSelectedJob = (job: IJob | null) => (dispatch: Dispatch) => {
  dispatch({ type: JobActionTypes.SET_SELECTED_JOB, payload: job });
};
