import React from 'react';
import { ProfileSteps } from 'components/profile-form/Steps';
import { ProfileForm } from 'components/profile-form/index';
import { Container } from 'components/common/Form';

export const CreateProfile = () => {
  const [step, setStep] = React.useState(0);
  return (
    <Container>
      <ProfileSteps step={step} />
      <ProfileForm step={step} setStep={setStep} />
    </Container>
  );
};
