import axios from 'axios';
import { Dispatch } from 'redux';
import applicants from 'api/profiles';
import { ProfileActionTypes } from 'state';
import { IProfileForm } from 'interfaces/forms';
import history from 'core/history';

const { CREATE_PROFILE_FAILURE } = ProfileActionTypes;

export const createJob =
  (formData: IProfileForm, imageData: { type: string } | null) =>
  async (dispatch: Dispatch) => {
    if (!imageData) {
      const errors = [{ message: 'Please select an image', field: 'image' }];
      dispatch({ type: CREATE_PROFILE_FAILURE, payload: errors });
      return;
    }

    try {
      dispatch({ type: ProfileActionTypes.CREATE_PROFILE_REQUEST });
      const uploadConfig = await axios.get('/api/uploads/image');
      const ContentType = imageData.type;
      const headers = { headers: { ContentType } };
      await axios.put(uploadConfig.data.url, imageData, headers);

      const config = { headers: { 'Content-Type': 'application/json' } };
      const requestBody = { ...formData, avatar: uploadConfig.data.key };
      await applicants.post('/', requestBody, config);

      dispatch({ type: ProfileActionTypes.CREATE_PROFILE_SUCCESS });
      history.push('/dashboard/jobs');
    } catch (e) {
      const payload = e.response.data.errors;
      dispatch({ type: CREATE_PROFILE_FAILURE, payload });
      // setTimeout(() => {
      //   dispatch({ type: CREATE_APPLICANT_FAILURE, payload: [] });
      // }, 2000);
    }
  };
