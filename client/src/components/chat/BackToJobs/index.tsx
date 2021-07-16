import { useHistory } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const BackToJobs = () => {
  const { theme, expanded } = useTypedSelector((state) => state.dashboard);
  const history = useHistory();
  const handleClick = () => history.push('/dashboard/jobs');

  return (
    <div
      className='back-to-jobs'
      style={{ background: theme }}
      onClick={handleClick}
    >
      <span className={`${expanded ? 'expand' : 'retract'}`}>
        Back to finding new jobs
      </span>
      <span className='material-icons'>chevron_right</span>
    </div>
  );
};
