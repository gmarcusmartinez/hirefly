import React from 'react';
import { DashHeader } from 'components/common/DashHeader';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';
import { Spinner } from 'components/common/Spinner';
import { NoItems } from 'components/common/NoMoreItemsMsg';

export const Applicants = () => {
  const [current, setCurrent] = React.useState(0);
  const { fetchApplications } = useActions();
  const { selected } = useTypedSelector(({ jobs }) => jobs);
  const { items, loading } = useTypedSelector((state) => state.applications);

  React.useEffect(() => {
    fetchApplications(selected!._id);
    // eslint-disable-next-line
  }, []);

  const next = () => {
    if (current === items.length - 1) {
      fetchApplications(selected!._id);
      setCurrent(0);
    } else setCurrent(current + 1);
  };

  const list = items.map((item: any) => (
    <SwiperCard key={item._id} doc={item} docType='applicant' next={next} />
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
