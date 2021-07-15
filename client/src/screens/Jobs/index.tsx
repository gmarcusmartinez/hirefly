import React from 'react';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IJob } from 'interfaces';
import { Spinner } from 'components/common/Spinner';
import { DashHeader } from 'components/common/DashHeader';

export const Jobs = () => {
  const [current, setCurrent] = React.useState(0);
  const { getAllJobs } = useActions();
  const { items, loading } = useTypedSelector(({ jobs }) => jobs);

  const next = () => {
    if (current === items.length - 1) {
      getAllJobs();
      setCurrent(0);
    } else setCurrent(current + 1);
  };

  React.useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line
  }, []);

  const list = items.map((item: IJob) => (
    <SwiperCard key={item._id} doc={item} docType='job' next={next} />
  ));

  if (loading) return <Spinner />;
  return (
    <div className='jobs-screen'>
      <DashHeader title='Find Jobs' />
      <div className='jobs-screen__main'>
        <div className='jobs-screen__list'>{list}</div>
        <div className='jobs-screen__selected'>{list[current]}</div>
      </div>
    </div>
  );
};
