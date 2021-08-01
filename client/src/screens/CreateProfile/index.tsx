import React from 'react';
import { blankForm } from './form';
import { DashHeader } from 'components/common/DashHeader';
import { NameStep } from 'components/create-profile/NameStep';
import { LocationStep } from 'components/create-profile/LocationStep';
import { LinkStep } from 'components/create-profile/LinkStep';

export const CreateProfile = () => {
  const [step, setStep] = React.useState(0);
  const [formData, setFormData] = React.useState(blankForm);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const props = { formData, onChange, setStep };

  return (
    <div className='create-profile'>
      <DashHeader title='Create Your Profile' />
      <div className='create-profile__main'>
        {step === 0 && <NameStep {...props} />}
        {step === 1 && <LocationStep {...props} />}
        {step === 2 && <LinkStep {...props} />}
      </div>
    </div>
  );
};
