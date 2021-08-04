import { SettingsLink } from './Link';
import { Modes } from './Modes';

export const Settings = () => {
  return (
    <div className='settings'>
      <SettingsLink
        text='Find Jobs'
        icon='search'
        path='/dashboard/jobs'
        headerText='Find Jobs'
      />

      <SettingsLink
        text='Notifications'
        icon='mail_outline'
        path='/dashboard/notifications'
        headerText='Notifications'
      />

      <SettingsLink
        text='Post Job'
        icon='post_add'
        path='/dashboard/job-form'
        headerText='Post Job'
      />
      <SettingsLink
        text='My Jobs'
        icon='dynamic_feed'
        path='/dashboard/my-jobs'
        headerText='My Posted Jobs'
      />
      <SettingsLink
        text='Edit Profile'
        icon='edit'
        path='/dashboard/edit-profile'
        headerText='Edit Profile'
      />
      <SettingsLink text='Signout' icon='logout' path='signout' headerText='' />
      <Modes />
    </div>
  );
};
