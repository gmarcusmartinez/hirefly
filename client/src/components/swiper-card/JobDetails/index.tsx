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
      <span>Location: {job.location}</span>
      <span>Job Period: {job.duration} Month(s)</span>
      <span>Salary: {job.salary}€</span>
    </div>
  );
};
