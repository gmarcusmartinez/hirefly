import { AnyAction } from "redux";
import { IError, IJob } from "interfaces";
import { JobActionTypes } from "../types";

interface JobsState {
  loading: boolean;
  errors: IError[] | null;
  selected: IJob | null;
  jobs: IJob[];
}

const initialState = {
  loading: false,
  errors: null,
  selected: null,
  jobs: [],
};

export const jobs = (
  state: JobsState = initialState,
  action: AnyAction
): JobsState => {
  const { type, payload } = action;
  switch (type) {
    case JobActionTypes.CREATE_JOB_REQUEST:
    case JobActionTypes.DELETE_JOB_REQUEST:
    case JobActionTypes.GET_POSTED_JOBS_REQUEST:
    case JobActionTypes.UPDATE_JOB_REQUEST:
      return { ...state, loading: true };

    case JobActionTypes.CREATE_JOB_FAILURE:
    case JobActionTypes.DELETE_JOB_FAILURE:
    case JobActionTypes.GET_POSTED_JOBS_FAILURE:
    case JobActionTypes.UPDATE_JOB_FAILURE:
      return { ...state, loading: false, errors: payload };

    case JobActionTypes.CREATE_JOB_SUCCESS:
      return { ...state, loading: false, jobs: [...state.jobs, payload] };

    case JobActionTypes.DELETE_JOB_SUCCESS:
      const remainJobs = state.jobs.filter(({ _id }) => _id !== payload);
      return { ...state, loading: false, jobs: remainJobs };

    case JobActionTypes.GET_POSTED_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: payload };

    case JobActionTypes.UPDATE_JOB_SUCCESS:
      const updatedJobs = state.jobs.filter(({ _id }) => _id !== payload._id);
      return { ...state, loading: false, jobs: [payload, ...updatedJobs] };

    case JobActionTypes.SET_SELECTED_JOB:
      return { ...state, selected: payload };
    default:
      return state;
  }
};
