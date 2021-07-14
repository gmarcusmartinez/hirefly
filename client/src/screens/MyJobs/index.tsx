import React from 'react';
import {AllCards}  from '../../components/jobCards/AllCards'
import { useTypedSelector } from 'hooks/use-typed-selector';

export const MyJobs = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  React.useEffect(() => {}, []);

  return (
    <div className='my-jobs'>
        <div className={`my-jobs__header ${mode}`}>
          <h2>My Posted Jobs</h2>
        </div>
        <div className='my-jobs__main'>
          <AllCards/>
        </div>
    </div>
  );
};