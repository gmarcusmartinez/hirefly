import axios from 'axios';
import { Dispatch } from 'redux';
import applicants from 'api/applicants';
import { ApplicantActionTypes } from 'state';
import { IApplicantForm } from 'interfaces/forms';

const { CREATE_APPLICANT_FAILURE } = ApplicantActionTypes;

export const createApplicant =
  (formData: IApplicantForm, imageData: { type: string } | null) =>
  async (dispatch: Dispatch) => {
    if (!imageData) {
      const errors = [{ message: 'Please select an image', field: 'image' }];
      dispatch({ type: CREATE_APPLICANT_FAILURE, payload: errors });
      return;
    }

    try {
      dispatch({ type: ApplicantActionTypes.CREATE_APPLICANT_REQUEST });
      const uploadConfig = await axios.get('/api/uploads/image');
      const ContentType = imageData.type;
      const headers = { headers: { ContentType } };
      await axios.put(uploadConfig.data.url, imageData, headers);

      const config = { headers: { 'Content-Type': 'application/json' } };
      const requestBody = { ...formData, avatar: uploadConfig.data.key };
      await applicants.post('/', requestBody, config);

      dispatch({ type: ApplicantActionTypes.CREATE_APPLICANT_SUCCESS });
    } catch (e) {
      const payload = e.response.data.errors;
      dispatch({ type: CREATE_APPLICANT_FAILURE, payload });
      // setTimeout(() => {
      //   dispatch({ type: CREATE_APPLICANT_FAILURE, payload: [] });
      // }, 2000);
    }
  };
