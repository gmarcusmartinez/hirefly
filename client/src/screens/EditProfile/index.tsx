import React from 'react';
import { ProfileSteps } from 'components/profile-form/Steps';
import { ProfileForm } from 'components/profile-form/index';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const EditProfile = () => {
  const [step, setStep] = React.useState(0);
  const { me } = useTypedSelector((state) => state.profiles);
  return (
    <div className='profile-form'>
      <ProfileSteps step={step} />
      <ProfileForm step={step} setStep={setStep} me={me} />
    </div>
  );
};
