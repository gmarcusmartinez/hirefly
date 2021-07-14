import axios from 'axios';
import { Dispatch } from 'redux';
import applicants from 'api/profiles';
import { IProfileForm } from 'interfaces/forms';
import { ProfileActionTypes } from 'state/types';

const { UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } = ProfileActionTypes;

export const updateProfile =
  (formData: IProfileForm, imageData: { type: string } | null) =>
  async (dispatch: Dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      if (imageData) {
        dispatch({ type: ProfileActionTypes.UPDATE_PROFILE_REQUEST });
        const uploadConfig = await axios.get('/api/uploads/image');
        const ContentType = imageData.type;
        const headers = { headers: { ContentType } };
        await axios.put(uploadConfig.data.url, imageData, headers);

        const requestBody = { ...formData, avatar: uploadConfig.data.key };
        const { data } = await applicants.put('/', requestBody, config);

        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
      } else {
        dispatch({ type: ProfileActionTypes.UPDATE_PROFILE_REQUEST });
        const { data } = await applicants.put('/', formData, config);
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
      }
    } catch (e) {
      const payload = e.response.data.errors;
      dispatch({ type: UPDATE_PROFILE_FAILURE, payload });
      setTimeout(() => {
        dispatch({ type: UPDATE_PROFILE_FAILURE, payload: [] });
      }, 2000);
    }
  };
