import React from 'react';
import { DashHeader } from 'components/common/DashHeader';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';
import { Spinner } from 'components/common/Spinner';
import { NoItems } from 'components/common/NoMoreItemsMsg';

export const Applicants = () => {
  const { fetchApplications, nextApplication } = useActions();
  const { selected } = useTypedSelector(({ jobs }) => jobs);
  const { items, loading, current } = useTypedSelector(
    ({ applications }) => applications
  );

  React.useEffect(() => {
    fetchApplications(selected!._id);
  }, [fetchApplications, selected]);

  const last = items.length - 1;
  const jobId = selected!._id;

  const approve = (id: string) =>
    nextApplication({ current, last, id, status: 'accepted', jobId });

  const decline = (id: string) => {
    const args = { current, last, id, status: 'declined', jobId };
    nextApplication(args);
  };

  const list = items.map((item: any) => (
    <SwiperCard
      key={item._id}
      doc={item}
      docType='applicant'
      approve={approve}
      decline={decline}
    />
  ));

  if (loading) return <Spinner />;
  if (!items.length) return <NoItems type='applicant' />;
  return (
    <div className='applicants'>
      <DashHeader title={`Applicants for ${selected!.title}`} />
      <div className='applicants__main'>
        <div className='applicants__list'>{list}</div>
        <div className='applicants__selected'>{list[current]}</div>
      </div>
    </div>
  );
};
