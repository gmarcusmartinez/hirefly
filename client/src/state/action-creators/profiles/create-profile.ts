import axios from 'axios';
import { Dispatch } from 'redux';
import applicants from 'api/profiles';
import { IProfileForm } from 'interfaces/forms';
import history from 'core/history';
import { ProfileActionTypes } from 'state/types';
import { DashboardActionTypes } from 'state/types';
const { CREATE_PROFILE_FAILURE, CREATE_PROFILE_SUCCESS } = ProfileActionTypes;

export const createProfile =
  (formData: IProfileForm, imageData: { type: string } | null) =>
  async (dispatch: Dispatch) => {
    if (!imageData) {
      const errors = [{ message: 'Please select an image', field: 'image' }];
      dispatch({ type: CREATE_PROFILE_FAILURE, payload: errors });
      setTimeout(() => {
        dispatch({ type: CREATE_PROFILE_FAILURE, payload: [] });
      }, 2000);
      return;
    }

    try {
      dispatch({ type: ProfileActionTypes.CREATE_PROFILE_REQUEST });
      const uploadConfig = await axios.get('/api/uploads/image', {
        params: { type: `${imageData.type}` },
      });

      const ContentType = imageData.type;
      const headers = { headers: { ContentType } };
      await axios.put(uploadConfig.data.url, imageData, headers);

      const config = { headers: { 'Content-Type': 'application/json' } };
      const requestBody = { ...formData, imgUrl: uploadConfig.data.key };

      const { data } = await applicants.post('/', requestBody, config);
      dispatch({ type: CREATE_PROFILE_SUCCESS, payload: data });

      dispatch({ type: DashboardActionTypes.SET_HEADER_TEXT, payload: 'Jobs' });
      history.push('/dashboard/jobs');
    } catch (e) {
      const payload = e.response.data.errors;
      dispatch({ type: CREATE_PROFILE_FAILURE, payload });
      setTimeout(() => {
        dispatch({ type: CREATE_PROFILE_FAILURE, payload: [] });
      }, 2000);
    }
  };
