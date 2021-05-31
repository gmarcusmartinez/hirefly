import { useTypedSelector } from 'hooks/use-typed-selector';

export const ProfileForm = () => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  const darkmode = mode === 'dark' ? 'darkmode' : '';

  return (
    <div className='create-profile'>
      <div className={`create-profile__header ${darkmode}`}>
        <h2>Create Profile</h2>
      </div>
      <div className='create-profile__main'>
        <div className='profile-form'>
          <div className='first-name'>First Name</div>
          <div className='last-name'>Last Name</div>
          <div className='avatar'>Avatar</div>
          <div className='cv'>CV</div>
          <div className='link'>Link</div>
          <div className='location'>Location</div>
          <div className='period'>Period</div>
          <div className='position'>Position</div>
          <div className='sal-min'>Sal Min</div>
          <div className='sal-max'>Sal Max</div>
          <div className='description'>Description</div>
        </div>
      </div>
    </div>
  );
};
