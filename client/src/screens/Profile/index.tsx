import { useTypedSelector } from 'hooks/use-typed-selector';

export const ProfileForm = () => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  const darkmode = mode === 'dark' ? 'darkmode' : '';

  return (
    <div className='profile-form'>
      <div className={`profile-form__header ${darkmode}`}>
        <h2>Create Profile</h2>
      </div>
      <div className='profile-form__main'></div>
    </div>
  );
};
