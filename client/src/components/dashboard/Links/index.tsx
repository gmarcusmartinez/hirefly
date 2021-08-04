import { useTypedSelector } from 'hooks/use-typed-selector';
import { DashLink } from './Link';
import { Modes } from './Modes';

export const Links = () => {
  const { currentUser } = useTypedSelector((state) => state.auth);
  const { me } = useTypedSelector((state) => state.profiles);
  const applicant = currentUser?.accountType === 'applicant';
  const recruiter = currentUser?.accountType === 'recruiter';

  return (
    <div className='settings'>
      {applicant && (
        <DashLink
          text='Jobs'
          icon='search'
          path='/dashboard/jobs'
          disabled={!me}
        />
      )}

      <DashLink
        text='Notifications'
        icon='mail_outline'
        path='/dashboard/notifications'
        disabled={!me}
      />
      {recruiter && (
        <>
          <DashLink
            text='Post Job'
            icon='post_add'
            path='/dashboard/post-job'
            disabled={!me}
          />
          <DashLink
            text='My Jobs'
            icon='dynamic_feed'
            path='/dashboard/my-jobs'
            disabled={!me}
          />
        </>
      )}
      <DashLink
        text='Edit Profile'
        icon='edit'
        path='/dashboard/edit-profile'
        disabled={!me}
      />
      <DashLink text='Signout' icon='logout' path='/dashboard/signout' />
      <Modes />
    </div>
  );
};
