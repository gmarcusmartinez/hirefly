import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { DashHeader } from 'components/common/DashHeader';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { PostJobSteps } from 'components/job-form/Steps';
import { JobForm } from 'components/job-form';

export const EditJob = () => {
  const [step, setStep] = React.useState(0);
  const { errors, selected } = useTypedSelector(({ jobs }) => jobs);

  return (
    <div className='job-form'>
      <DashHeader title='Edit Job' />
      <div className='job-form__main'>
        <PostJobSteps step={step} />
        <JobForm setStep={setStep} step={step} selected={selected} />
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
