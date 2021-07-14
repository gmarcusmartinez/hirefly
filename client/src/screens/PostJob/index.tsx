import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { JobForm } from 'components/forms/job-form';
import { useHistory } from 'react-router-dom';
import { ErrorsContainer } from 'components/common/ErrorsContainer';

export const PostJob = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  const history = useHistory();
  const { me } = useTypedSelector(({ profiles }) => profiles);
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  React.useEffect(() => {
    if (!me) history.push('/dashboard/profile-form');
  }, [me, history]);

  return (
    <div className='post-job'>
      <div className={`post-job__header ${mode}`}>
        <h2> Post Job </h2>
      </div>
      <div className='post-job__main'>
        <JobForm />
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
