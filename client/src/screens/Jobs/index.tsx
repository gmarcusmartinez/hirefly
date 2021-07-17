import React from 'react';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IJob } from 'interfaces';
import { Spinner } from 'components/common/Spinner';
import { DashHeader } from 'components/common/DashHeader';
import { NoItems } from 'components/common/NoMoreItemsMsg';
import { AlertContainer } from 'components/alerts/AlertContainer';

export const Jobs = () => {
  const { items, loading, current } = useTypedSelector(({ jobs }) => jobs);
  const { clearJobs, getAllJobs, createApplication, declineJob } = useActions();

  React.useEffect(() => {
    getAllJobs();
    return () => {
      clearJobs();
    };
  }, [getAllJobs, clearJobs]);

  const last = items.length - 1;

  const approve = (jobId: string) =>
    createApplication({ current, last, jobId });
  const decline = (jobId: string) => declineJob({ current, last, jobId });

  const list = items.map((item: IJob) => (
    <SwiperCard
      key={item._id}
      doc={item}
      docType='job'
      approve={approve}
      decline={decline}
    />
  ));

  if (loading) return <Spinner />;
  if (!items.length) return <NoItems type='applicant' />;
  return (
    <div className='jobs-screen'>
      <DashHeader title='Find Jobs' />
      <div className='jobs-screen__main'>
        <AlertContainer />
        <div className='jobs-screen__list'>{list}</div>
        <div className='jobs-screen__selected'>{list[current]}</div>
      </div>
    </div>
  );
};
