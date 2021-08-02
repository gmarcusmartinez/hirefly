import React from 'react';
import { DashHeader } from 'components/common/DashHeader';
import { CreateProfileSteps } from 'components/create-profile/Steps';
import { ProfileForm } from 'components/create-profile/index';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const EditProfile = () => {
  const [step, setStep] = React.useState(0);
  const { me } = useTypedSelector((state) => state.profiles);
  return (
    <div className='create-profile'>
      <DashHeader title='Edit Your Profile' />
      <div className='create-profile__main'>
        <CreateProfileSteps step={step} />
        <ProfileForm step={step} setStep={setStep} me={me} />
      </div>
    </div>
  );
};
