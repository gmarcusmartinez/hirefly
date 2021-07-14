import { Dispatch } from "redux";
import jobs from "api/jobs";
import { JobActionTypes } from "state/types";

const { DELETE_JOB_FAILURE, DELETE_JOB_SUCCESS } = JobActionTypes;

export const deleteJob = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: JobActionTypes.DELETE_JOB_REQUEST });
    await jobs.delete(`/${id}`);
    dispatch({ type: DELETE_JOB_SUCCESS, payload: id });
  } catch (e) {
    const errors = e.response.data.errors;
    dispatch({ type: DELETE_JOB_FAILURE, payload: errors });
  }
};
