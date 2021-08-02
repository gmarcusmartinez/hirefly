import React from 'react';
import { DashHeader } from 'components/common/DashHeader';
import { ProfileSteps } from 'components/profile-form/Steps';
import { ProfileForm } from 'components/profile-form/index';

export const CreateProfile = () => {
  const [step, setStep] = React.useState(0);

  return (
    <div className='profile-form'>
      <DashHeader title='Create Your Profile' />
      <div className='profile-form__main'>
        <ProfileSteps step={step} />
        <ProfileForm step={step} setStep={setStep} />
      </div>
    </div>
  );
};
