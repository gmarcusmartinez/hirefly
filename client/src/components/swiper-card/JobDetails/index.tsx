import { useTypedSelector } from 'hooks/use-typed-selector';
import { IJob } from 'interfaces';
import { FC } from 'react';

interface IProps {
  job: IJob;
}
export const JobDetails: FC<IProps> = ({ job }) => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  return (
    <div className={`job-details ${mode} fade-out`}>
      <div className='job-details__title'>
        <h2>{job.title}</h2>
      </div>
      <span>{job.description}</span>
      <span>
        Location: {job.city} {job.country}
      </span>
      <span>
        Salary: {job.minSalary}€ - {job.maxSalary}€
      </span>
    </div>
  );
};
