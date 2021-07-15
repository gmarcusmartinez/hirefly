import React from 'react';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IJob } from 'interfaces';
import { Spinner } from 'components/common/Spinner';

export const Jobs = () => {
  const { getAllJobs } = useActions();
  const { items, loading } = useTypedSelector(({ jobs }) => jobs);
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  React.useEffect(() => {
    getAllJobs();
    console.log(items);
  }, []);

  const list = items.map((item: IJob) => {
    console.log(item);
    return <SwiperCard key={item._id} doc={item} docType='job' />;
  });

  if (loading) return <Spinner />;
  return (
    <div className='jobs-screen'>
      <div className={`jobs-screen__header ${mode}`}>
        <h2>Find Jobs</h2>
      </div>
      <div className='jobs-screen__main'>{list}</div>;
    </div>
  );
};
