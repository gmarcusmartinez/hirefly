import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { IJob } from 'interfaces';
import { s3Url } from 'api/s3url';
import { useActions } from 'hooks/use-actions';

interface IProps {
  job: IJob;
}

export const SingleCard: FC<IProps> = ({ job }) => {
  const history = useHistory();
  const { deleteJob, setSelectedJob } = useActions();

  const { title } = job;

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
    ? `url(${job.imgUrl}) no-repeat center center`
    : `url(${s3Url}/${job?.imgUrl})  no-repeat center center`;

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
        <span>
          {job.city} {job.country}
        </span>
        {/* <span>
          {job.minSalary} - {job.maxSalary} €
        </span> */}
        <div className='job-card__actions'>
          <i className='material-icons' onClick={redirectToEditJob}>
            edit
          </i>
          <i
            className='material-icons'
            onClick={(e) => {
              e.stopPropagation();
              deleteJob(job._id);
            }}
          >
            delete
          </i>
        </div>
      </div>
    </div>
  );
};
