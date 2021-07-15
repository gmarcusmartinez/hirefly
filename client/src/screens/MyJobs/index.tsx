import React from 'react';
import { IJob } from 'interfaces';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { SingleCard } from 'components/job-card';
import { DashHeader } from 'components/common/DashHeader';

export const MyJobs = () => {
  const { getPostedJobs } = useActions();
  const { items } = useTypedSelector(({ jobs }) => jobs);

  React.useEffect(() => {
    getPostedJobs();
    // eslint-disable-next-line
  }, []);

  const list = items.map((item: IJob) => (
    <SingleCard key={item._id} job={item} />
  ));

  return (
    <div className='my-jobs'>
      <DashHeader title='My Posted Jobs' />
      <div className='my-jobs__main'>{list}</div>
    </div>
  );
};
