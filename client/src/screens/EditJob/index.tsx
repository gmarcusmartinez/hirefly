import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { JobForm } from 'components/forms/job-form';
import { useHistory } from 'react-router-dom';
import { DashHeader } from 'components/common/DashHeader';
import { ErrorsContainer } from 'components/common/ErrorsContainer';

export const EditJob = () => {
  const history = useHistory();
  const { me } = useTypedSelector(({ profiles }) => profiles);
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  React.useEffect(() => {
    if (!me) history.push('/dashboard/profile-form');
  }, [me, history]);

  return (
    <div className='post-job'>
      <DashHeader title='Edit Job' />
      <div className='post-job__main'>
        <JobForm />
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
