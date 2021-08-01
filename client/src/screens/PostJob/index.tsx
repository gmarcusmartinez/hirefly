import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
// import { JobForm } from 'components/forms/job-form';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { DashHeader } from 'components/common/DashHeader';
import { PostJobSteps } from 'components/post-job/Steps';
import { PostJobDetails } from 'components/post-job/Details';
import { PostJobPayment } from 'components/post-job/Payment';

export const PostJob = () => {
  const [step, setStep] = React.useState(0);
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  return (
    <div className='post-job'>
      <DashHeader title='Post Job' />
      <div className='post-job__main'>
        <PostJobSteps step={step} />
        <div className='post-job__steps-active'>
          <div
            className='post-job__steps-wrapper'
            style={{
              transform: `translateX(-${step * 100}%)`,
            }}
          >
            <PostJobDetails setStep={setStep} />
            <PostJobPayment setStep={setStep} />
          </div>
        </div>
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
