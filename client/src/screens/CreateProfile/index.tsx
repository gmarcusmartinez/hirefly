import React from 'react';
import { ProfileSteps } from 'components/profile-form/Steps';
import { ProfileForm } from 'components/profile-form/index';

export const CreateProfile = () => {
  const [step, setStep] = React.useState(0);
  return (
    <div className='profile-form'>
      <ProfileSteps step={step} />
      <ProfileForm step={step} setStep={setStep} />
    </div>
  );
};
