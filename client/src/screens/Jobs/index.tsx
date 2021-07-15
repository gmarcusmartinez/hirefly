import React from 'react';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IJob } from 'interfaces';
import { Spinner } from 'components/common/Spinner';

export const Jobs = () => {
  const [current, setCurrent] = React.useState(0);
  const { getAllJobs } = useActions();
  const { items, loading } = useTypedSelector(({ jobs }) => jobs);
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  const next = () => {
    if (current === items.length - 1) {
      getAllJobs();
      setCurrent(0);
    } else setCurrent(current + 1);
  };

  const approve = () => {
    next();
  };
  const deny = () => next();

  React.useEffect(() => {
    getAllJobs();
  }, []);

  const list = items.map((item: IJob) => (
    <SwiperCard
      key={item._id}
      doc={item}
      docType='job'
      handleApprove={approve}
      handleDeny={deny}
    />
  ));

  if (loading) return <Spinner />;
  return (
    <div className='jobs-screen'>
      <div className={`jobs-screen__header ${mode}`}>
        <h2>Find Jobs</h2>
      </div>
      <div className='jobs-screen__main'>
        <div className='jobs-screen__list'>{list}</div>
        <div className='jobs-screen__selected'>{list[current]}</div>
      </div>
      ;
    </div>
  );
};
