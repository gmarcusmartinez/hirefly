import axios from 'axios';
import { Dispatch } from 'redux';
import jobs from 'api/jobs';
import history from 'core/history';
import { IJobForm } from 'interfaces/forms';
import { JobActionTypes } from 'state/types';

const { CREATE_JOB_FAILURE } = JobActionTypes;

export const createJob =
  (formData: IJobForm, imageData: { type: string } | null) =>
  async (dispatch: Dispatch) => {
    if (!imageData) {
      const errors = [{ message: 'Please select an image', field: 'image' }];
      dispatch({ type: CREATE_JOB_FAILURE, payload: errors });
      return;
    }

    try {
      dispatch({ type: JobActionTypes.CREATE_JOB_REQUEST });
      const uploadConfig = await axios.get('/api/uploads/job-image');
      const ContentType = imageData.type;
      const headers = { headers: { ContentType } };
      await axios.put(uploadConfig.data.url, imageData, headers);

      const config = { headers: { 'Content-Type': 'application/json' } };
      const requestBody = { ...formData, imgUrl: uploadConfig.data.key };
      const { data } = await jobs.post('/', requestBody, config);

      history.push('/dashboard/my-jobs');
      dispatch({ type: JobActionTypes.CREATE_JOB_SUCCESS, payload: data });
    } catch (e) {
      const payload = e.response.data.errors;
      dispatch({ type: CREATE_JOB_FAILURE, payload });
      setTimeout(() => {
        dispatch({ type: CREATE_JOB_FAILURE, payload: [] });
      }, 2000);
    }
  };
