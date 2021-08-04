import { FC } from 'react';

interface IProps {
  setFormDisplay: Function;
  setAccountType: Function;
}

export const SelectAccountType: FC<IProps> = ({
  setFormDisplay,
  setAccountType,
}) => {
  const handleClick = (type: string) => {
    setAccountType(type);
    setFormDisplay('RENDER_SIGNUP');
  };

  return (
    <div className='select-account-type'>
      <h3>Select Account Type</h3>
      <button className='btn-primary' onClick={() => handleClick('applicant')}>
        Applicant
      </button>
      <button className='btn-inverse' onClick={() => handleClick('recruiter')}>
        Recruiter
      </button>
      <div className='auth-form-wrapper__switch'>
        Already have an account?
        <span onClick={() => setFormDisplay('RENDER_SIGNIN')}> Signin </span>
      </div>
    </div>
  );
};
