import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { PostJobSteps } from 'components/job-form/Steps';
import { JobForm } from 'components/job-form';
import { Container } from 'components/common/Form';

export const PostJob = () => {
  const [step, setStep] = React.useState(0);
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  return (
    <Container>
      <PostJobSteps step={step} />
      <JobForm setStep={setStep} step={step} />
      <ErrorsContainer errors={errors ? errors : null} />
    </Container>
  );
};
