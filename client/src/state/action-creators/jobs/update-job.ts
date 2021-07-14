import axios from 'axios';
import { Dispatch } from 'redux';
import history from 'core/history';
import jobs from 'api/jobs';
import { JobActionTypes } from 'state/types';
import { IJobForm } from 'interfaces/forms';

const { UPDATE_JOB_FAILURE, UPDATE_JOB_SUCCESS } = JobActionTypes;

export const updateJob =
  (formData: IJobForm, imageData: { type: string } | null, id: string) =>
  async (dispatch: Dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      if (imageData) {
        dispatch({ type: JobActionTypes.UPDATE_JOB_REQUEST });
        const uploadConfig = await axios.get('/api/uploads/job-image');
        const ContentType = imageData?.type;
        const headers = { headers: { ContentType } };

        await axios.put(uploadConfig.data.url, imageData, headers);
        const requestBody = { ...formData, imgUrl: uploadConfig.data.key };

        const { data } = await jobs.put(`/${id}`, requestBody, config);

        history.push('/dashboard/my-jobs');
        dispatch({ type: UPDATE_JOB_SUCCESS, payload: data });
      } else {
        dispatch({ type: JobActionTypes.UPDATE_JOB_REQUEST });
        const { data } = await jobs.put(`/${id}`, formData, config);
        console.log(data);

        history.push('/dashboard/my-jobs');
        dispatch({ type: UPDATE_JOB_SUCCESS, payload: data });
      }
    } catch (e) {
      console.log(e);
      const errors = e.response.data.errors || e.message;
      dispatch({ type: UPDATE_JOB_FAILURE, payload: errors });
    }
  };
