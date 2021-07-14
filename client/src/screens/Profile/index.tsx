import { ProfileForm } from 'components/forms/profile-form';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ErrorsContainer } from 'components/common/ErrorsContainer';

export const CreateProfile = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { me, errors } = useTypedSelector(({ profiles }) => profiles);

  return (
    <div className='create-profile'>
      <div className={`create-profile__header ${mode}`}>
        <h2>{me ? 'Edit' : 'Create'} Profile</h2>
      </div>
      <div className='create-profile__main'>
        <ProfileForm />
        <ErrorsContainer errors={errors} />
      </div>
    </div>
  );
};
