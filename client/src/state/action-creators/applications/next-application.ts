import applications from 'api/applications';
import chats from 'api/chats';
import { Dispatch } from 'redux';
import { ApplicationActionTypes } from 'state';

const { FETCH_APPLICATIONS_SUCCESS, SET_CURRENT } = ApplicationActionTypes;

interface IArgs {
  current: number;
  last: number;
  id: string;
  status: string;
  jobId: string;
}

export const nextApplication =
  ({ current, last, id, status, jobId }: IArgs) =>
  async (dispatch: Dispatch) => {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      dispatch({ type: ApplicationActionTypes.UPDATE_APPLICATION_REQUEST });
      const { data } = await applications.put(`/${id}`, { status }, config);

      dispatch({ type: ApplicationActionTypes.UPDATE_APPLICATION_SUCCESS });
      await chats.post('/', { partnerId: data.applicant }, config);

      if (current === last) {
        dispatch({ type: ApplicationActionTypes.FETCH_APPLICATIONS_REQUEST });
        const { data } = await applications.get(`/${jobId}`);

        dispatch({ type: FETCH_APPLICATIONS_SUCCESS, payload: data });
        dispatch({ type: SET_CURRENT, payload: 0 });
      } else {
        dispatch({ type: SET_CURRENT, payload: current + 1 });
      }
    } catch (e) {}
  };
