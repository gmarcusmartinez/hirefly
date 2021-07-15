import React from 'react';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { SingleCard } from 'components/job-card';
import { IJob } from 'interfaces';

export const MyJobs = () => {
  const { getPostedJobs } = useActions();
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
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
      <div className={`my-jobs__header ${mode}`}>
        <h2>My Posted Jobs</h2>
      </div>
      <div className='my-jobs__main'>{list}</div>
    </div>
  );
};
