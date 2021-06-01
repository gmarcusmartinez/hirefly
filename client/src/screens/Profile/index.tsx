import { ApplicantForm } from 'components/forms/applicant-form';
import { RecruiterForm } from 'components/forms/recruiter-form';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const CreateProfile = () => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
  const { currentUser } = useTypedSelector(({ auth }) => auth);

  return (
    <div className='create-profile'>
      <div className={`create-profile__header ${mode}`}>
        <h2>Create Profile</h2>
      </div>
      <div className='create-profile__main'>
        {currentUser?.accountType === 'applicant' && <ApplicantForm />}
        {currentUser?.accountType === 'recruiter' && <RecruiterForm />}
      </div>
    </div>
  );
};
