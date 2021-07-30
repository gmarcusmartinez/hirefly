import { useTypedSelector } from 'hooks/use-typed-selector';
import { JobForm } from 'components/forms/job-form';
import { DashHeader } from 'components/common/DashHeader';
import { ErrorsContainer } from 'components/common/ErrorsContainer';

export const EditJob = () => {
  const { errors } = useTypedSelector(({ jobs }) => jobs);

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
