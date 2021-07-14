import React from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IJob } from 'interfaces';
import { s3Url } from 'api/s3url';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useActions } from 'hooks/use-actions';

interface IProps {
  job: IJob;
}

export const SingleCard: FC<IProps> = ({ job }, k) => {
  const { deleteJob, setSelectedJob } = useActions();
  const { theme, mode } = useTypedSelector((state) => state.dashboard);

  const colorMode =
    mode === 'darkmode' ? { color: 'white' } : { color: 'black' };

  const duration = job.duration > 1 ? 'Months' : 'Month';
  const euro = getSymbolFromCurrency('EUR');
  const history = useHistory();

  const redirectToEditJob = () => {
    setSelectedJob(job);
    history.push(`/dashboard/edit-job`);
  };
  const src = job.imgUrl.startsWith('http')
    ? job.imgUrl
    : `${s3Url}/${job?.imgUrl}`;

  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-header'>
          <h1 key={job._id} style={colorMode}>
            {job.title}
          </h1>
        </div>
        <div className='card-body'>
          <img className='job-img' src={src} alt='' />
          <p style={colorMode}>{job.skills}</p>
          <p style={colorMode}>{job.location}</p>
          <div className='info'>
            <p style={colorMode}>{`${job?.duration} ${duration}`}</p>
            <p style={colorMode}>{`${job?.salary} ${euro}`}</p>
          </div>
          <div className='card-btn'>
            <i
              className='material-icons'
              style={{ color: theme }}
              onClick={() => deleteJob(job._id)}
            >
              delete
            </i>
            <i
              className='material-icons'
              style={{ color: theme }}
              onClick={redirectToEditJob}
            >
              edit
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};
