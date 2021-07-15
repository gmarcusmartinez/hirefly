import { ProfileForm } from 'components/forms/profile-form';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { DashHeader } from 'components/common/DashHeader';

export const CreateProfile = () => {
  const { me, errors } = useTypedSelector(({ profiles }) => profiles);
  const action = me ? 'Edit' : 'Create';

  return (
    <div className='create-profile'>
      <DashHeader title={`${action} Profile`} />
      <div className='create-profile__main'>
        <ProfileForm />
        <ErrorsContainer errors={errors} />
      </div>
    </div>
  );
};
