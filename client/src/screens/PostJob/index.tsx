import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { JobForm } from 'components/forms/job-form';
import { useHistory } from 'react-router-dom';

export const PostJob = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  const history = useHistory();
  const { me } = useTypedSelector(({ profiles }) => profiles);
  React.useEffect(() => {
    if (!me) history.push('/dashboard/profile-form');
  }, []);

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
