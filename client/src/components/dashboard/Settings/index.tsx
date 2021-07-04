import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router';
import { toggleSidenav } from 'state/action-creators';
import { SettingsLink } from './Link';
import { Modes } from './Modes';
import { Themes } from './Themes';

export const Settings = () => {
  const { setSidenavComponent, toggleSidenav } = useActions();

  const history = useHistory();

  const redirect = (route: string) => {
    history.push(route);
    toggleSidenav(false);
  };

  const redirectToJobs = () => {
    history.push('/dashboard/jobs');
    setSidenavComponent('MESSAGES');
    toggleSidenav(false);
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
        cb={() => redirect('/dashboard/job-form')}
      />
      <SettingsLink
        text='My Jobs'
        icon='dynamic_feed'
        cb={() => redirect('/dashboard/my-jobs')}
      />
      <SettingsLink
        text={`${me ? 'Edit' : 'Create'} Profile`}
        icon='edit'
        cb={() => redirect('/dashboard/profile-form')}
      />
      <SettingsLink
        text='Signout'
        icon='logout'
        cb={() => redirect('/dashboard/signout')}
      />
      <Modes />
      <Themes />
    </div>
  );
};
