import { useTypedSelector } from 'hooks/use-typed-selector';
import { DashHeader } from 'components/common/DashHeader';
import { ErrorsContainer } from 'components/common/ErrorsContainer';

export const EditJob = () => {
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  return (
    <div className='post-job'>
      <DashHeader title='Edit Job' />
      <div className='post-job__main'>
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
