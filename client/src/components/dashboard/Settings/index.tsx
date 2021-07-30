import { SettingsLink } from './Link';
import { Modes } from './Modes';

export const Settings = () => {
  return (
    <div className='settings'>
      <SettingsLink text='Find Jobs' icon='search' path='/dashboard/jobs' />

      <SettingsLink
        text='Notifications'
        icon='mail_outline'
        path='/dashboard/notifications'
      />

      <SettingsLink
        text='Post Job'
        icon='post_add'
        path='/dashboard/job-form'
      />
      <SettingsLink
        text='My Jobs'
        icon='dynamic_feed'
        path='/dashboard/my-jobs'
      />
      <SettingsLink
        text='Edit Profile'
        icon='edit'
        path='/dashboard/edit-profile'
      />
      <SettingsLink text='Signout' icon='logout' path='signout' />
      <Modes />
    </div>
  );
};
