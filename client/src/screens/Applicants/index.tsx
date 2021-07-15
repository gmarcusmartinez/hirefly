import React from 'react';
import { DashHeader } from 'components/common/DashHeader';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Applicants = () => {
  const { selected } = useTypedSelector(({ jobs }) => jobs);

  return (
    <div className='applicants'>
      <DashHeader title={`Applicants for ${selected!.title}`} />
    </div>
  );
};
