import React from 'react';
import { useActions } from 'hooks/use-actions';
import { SwiperCard } from 'components/swiper-card';

export const Jobs = () => {
  const { getAllJobs } = useActions();
  React.useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className='jobs-screen'>
      <SwiperCard docType='job' />
    </div>
  );
};
