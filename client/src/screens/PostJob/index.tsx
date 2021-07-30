import { useTypedSelector } from 'hooks/use-typed-selector';
import { JobForm } from 'components/forms/job-form';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { DashHeader } from 'components/common/DashHeader';

export const PostJob = () => {
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  return (
    <div className='post-job'>
      <DashHeader title='Post Job' />
      <div className='post-job__main'>
        <JobForm />
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
