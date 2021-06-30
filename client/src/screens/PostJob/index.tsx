import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { JobForm } from 'components/forms/job-form';

export const PostJob = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  return (
    <div className='post-job'>
      <div className={`post-job__header ${mode}`}>
        <h2>Post Job</h2>
      </div>
      <div className='post-job__main'>
        <JobForm />
      </div>
    </div>
  );
};
