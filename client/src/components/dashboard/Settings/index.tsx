import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router';
import { SettingsLink } from './Link';
import { Modes } from './Modes';
import { Themes } from './Themes';

export const Settings = () => {
  const { setSidenavComponent } = useActions();

  const history = useHistory();
  const redirectToEdit = () => history.push('/dashboard/profile-form');
  const redirectToSignout = () => history.push('/dashboard/signout');
  const redirectToJobForm = () => history.push('/dashboard/job-form');
  const redirectToMyJobs = () => history.push('/dashboard/my-jobs');

  const redirectToJobs = () => {
    setSidenavComponent('MESSAGES');
    history.push('/dashboard/jobs');
  };

  const { me } = useTypedSelector((state) => state.profiles);
  return (
    <div className='settings'>
      <SettingsLink
        text='Search Jobs'
        icon='search'
        cb={() => redirectToJobs()}
      />
      <SettingsLink
        text='Post Job'
        icon='post_add'
        cb={() => redirectToJobForm()}
      />
      <SettingsLink
        text='My Jobs'
        icon='dynamic_feed'
        cb={() => redirectToMyJobs()}
      />
      <SettingsLink
        text={`${me ? 'Edit' : 'Create'} Profile`}
        icon='edit'
        cb={() => redirectToEdit()}
      />
      <SettingsLink
        text='Signout'
        icon='logout'
        cb={() => redirectToSignout()}
      />
      <Modes />
      <Themes />
    </div>
  );
};
