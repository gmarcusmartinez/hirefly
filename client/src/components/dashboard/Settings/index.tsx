import { useTypedSelector } from 'hooks/use-typed-selector';
import { SettingsLink } from './Link';
import { Modes } from './Modes';
import { Themes } from './Themes';

export const Settings = () => {
  const { me } = useTypedSelector((state) => state.profiles);
  return (
    <div className='settings'>
      <SettingsLink text='Find Jobs' icon='search' path='/dashboard/jobs' />

      <SettingsLink
        text='Notifications'
        icon='mail_outline'
        path='/dashboard/notifications'
      />

      <SettingsLink
        text='Create Job'
        icon='post_add'
        path='/dashboard/job-form'
      />
      <SettingsLink
        text='Edit Jobs'
        icon='dynamic_feed'
        path='/dashboard/my-jobs'
      />
      <SettingsLink
        text={`${me ? 'Edit' : 'Create'} Profile`}
        icon='edit'
        path='/dashboard/profile-form'
      />
      <SettingsLink text='Signout' icon='logout' path='signout' />
      <Modes />
      <Themes />
    </div>
  );
};
