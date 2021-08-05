import { FC, MouseEvent } from 'react';
import { IJob } from 'interfaces';
import { s3Url } from 'api/s3url';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';

interface IProps {
  job: IJob;
}

export const SingleCard: FC<IProps> = ({ job }) => {
  const history = useHistory();
  const { deleteJob, setSelectedJob } = useActions();

  const handleClick = () => {
    setSelectedJob(job);
    history.push(`/dashboard/applicants`);
  };

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    deleteJob(job._id);
  };

  const handleEditRedirect = (e: MouseEvent) => {
    e.stopPropagation();
    setSelectedJob(job);
    history.push(`/dashboard/edit-job`);
  };

  const background = job.imgUrl.startsWith('http')
    ? `url(${job.imgUrl})`
    : `url(${s3Url}/${job?.imgUrl})`;

  return (
    <div className='job-card' style={{ background }} onClick={handleClick}>
      <div className='job-card__header'>
        <span>{job.title}</span>
      </div>
      <div className='job-card__details'>
        <span>
          {job.city} {job.country}
        </span>
        <div className='job-card__actions'>
          <i className='material-icons' onClick={handleEditRedirect}>
            edit
          </i>
          <i className='material-icons' onClick={handleDelete}>
            delete
          </i>
        </div>
      </div>
    </div>
  );
};
