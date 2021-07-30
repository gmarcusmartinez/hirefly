import { ProfileForm } from 'components/forms/profile-form';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { DashHeader } from 'components/common/DashHeader';

export const EditProfile = () => {
  const { errors } = useTypedSelector(({ profiles }) => profiles);

  return (
    <div className='create-profile'>
      <DashHeader title='Edit Profile' />
      <div className='create-profile__main'>
        <ProfileForm />
        <ErrorsContainer errors={errors} />
      </div>
    </div>
  );
};
