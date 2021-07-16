import { s3Url } from 'api/s3url';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router-dom';

export const ChatHeader = () => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  const { header } = useTypedSelector((state) => state.chats);
  const { imgUrl, firstName } = header!;

  const history = useHistory();
  const redirectToJobs = () => history.push('/dashboard/jobs');

  return (
    <div className={`chat__header ${mode}`}>
      <div className='chat__header__imgUrl'>
        <img src={`${s3Url}/${imgUrl}`} alt='' />
      </div>
      <span>{firstName}</span>
      <i className='material-icons' onClick={redirectToJobs}>
        close
      </i>
    </div>
  );
};
