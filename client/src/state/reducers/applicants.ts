import { AnyAction } from 'redux';
import { IError, IApplicant } from 'interfaces';
import { ApplicantActionTypes } from '../types';

interface ApplicantState {
  loading: boolean;
  errors: IError[] | null;
  selected: IApplicant | null;
}

const initialState = {
  loading: false,
  errors: null,
  selected: null,
};

export const applicants = (
  state: ApplicantState = initialState,
  action: AnyAction
): ApplicantState => {
  const { type, payload } = action;
  switch (type) {
    case ApplicantActionTypes.CREATE_APPLICANT_REQUEST:
      return { ...state, loading: true };
    case ApplicantActionTypes.CREATE_APPLICANT_SUCCESS:
      return { ...state, loading: false, selected: payload };
    case ApplicantActionTypes.CREATE_APPLICANT_FAILURE:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};
