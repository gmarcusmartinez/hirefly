import { AnyAction } from 'redux';
import { IError, IJob } from 'interfaces';
import { JobActionTypes } from '../types';

interface JobsState {
  current: number;
  loading: boolean;
  errors: IError[] | null;
  selected: IJob | null;
  items: IJob[] | [];
}

const initialState = {
  current: 0,
  loading: false,
  errors: null,
  selected: null,
  items: [],
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
    case JobActionTypes.GET_ALL_JOBS_REQUEST:
    case JobActionTypes.UPDATE_JOB_REQUEST:
      return { ...state, loading: true };

    case JobActionTypes.CREATE_JOB_FAILURE:
    case JobActionTypes.DELETE_JOB_FAILURE:
    case JobActionTypes.GET_POSTED_JOBS_FAILURE:
    case JobActionTypes.UPDATE_JOB_FAILURE:
      return { ...state, loading: false, errors: payload };

    case JobActionTypes.CREATE_JOB_SUCCESS:
      return { ...state, loading: false, items: [...state.items, payload] };

    case JobActionTypes.DELETE_JOB_SUCCESS:
      const filteredJobs = state.items.filter(({ _id }) => _id !== payload);
      return { ...state, loading: false, items: filteredJobs };

    case JobActionTypes.CLEAR_JOBS:
    case JobActionTypes.GET_POSTED_JOBS_SUCCESS:
    case JobActionTypes.GET_ALL_JOBS_SUCCESS:
      return { ...state, loading: false, items: payload };

    case JobActionTypes.UPDATE_JOB_SUCCESS:
      const updatedJobs = state.items.filter(({ _id }) => _id !== payload._id);
      return { ...state, loading: false, items: [payload, ...updatedJobs] };

    case JobActionTypes.SET_SELECTED_JOB:
      return { ...state, selected: payload };

    case JobActionTypes.SET_CURRENT_JOB:
      return { ...state, current: payload };
    default:
      return state;
  }
};
