import React from 'react';
import { ProfileForm } from 'components/forms/profile-form';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const CreateProfile = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { me } = useTypedSelector(({ profiles }) => profiles);
  React.useEffect(() => {}, []);

  return (
    <div className='create-profile'>
      <div className={`create-profile__header ${mode}`}>
        <h2>{me ? 'Edit' : 'Create'} Profile</h2>
      </div>
      <div className='create-profile__main'>
        <ProfileForm />
      </div>
    </div>
  );
};
