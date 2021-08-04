import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { PostJobSteps } from 'components/job-form/Steps';
import { JobForm } from 'components/job-form';

export const PostJob = () => {
  const [step, setStep] = React.useState(0);
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  return (
    <div className='job-form'>
      <PostJobSteps step={step} />
      <JobForm setStep={setStep} step={step} />
      <ErrorsContainer errors={errors ? errors : null} />
    </div>
  );
};
