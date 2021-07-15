import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { IJob } from 'interfaces';
import { s3Url } from 'api/s3url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  job: IJob;
}

export const SingleCard: FC<IProps> = ({ job }) => {
  const history = useHistory();
  const { deleteJob, setSelectedJob } = useActions();
  const { theme } = useTypedSelector((state) => state.dashboard);
  const { duration, salary, location, title } = job;
  const months = duration > 1 ? `${duration} Months` : '1 Month';

  const redirectToEditJob = (e: any) => {
    e.stopPropagation();
    setSelectedJob(job);
    history.push(`/dashboard/edit-job`);
  };

  const redirectToApplicants = () => {
    setSelectedJob(job);
    history.push(`/dashboard/applicants`);
  };

  const background = job.imgUrl.startsWith('http')
    ? `url(${job.imgUrl})`
    : `url(${s3Url}/${job?.imgUrl})`;

  return (
    <div
      className='job-card'
      style={{ background }}
      onClick={redirectToApplicants}
    >
      <div className='job-card__header'>
        <span>{title}</span>
      </div>
      <div className='job-card__details'>
        <span>{location}</span>
        <span>{months}</span>
        <span>{salary} €</span>
      </div>
      <div className='job-card__actions'>
        <i
          className='material-icons'
          style={{ color: theme }}
          onClick={redirectToEditJob}
        >
          edit
        </i>
        <i
          className='material-icons'
          style={{ color: theme }}
          onClick={(e) => {
            e.stopPropagation();
            deleteJob(job._id);
          }}
        >
          delete
        </i>
      </div>
    </div>
  );
};
