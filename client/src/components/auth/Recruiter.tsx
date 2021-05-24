import { useState, FC } from 'react';
import { Text } from 'components/common/TextInput';
import { signupInputs } from './inputs';

interface IProps {
  setFormDisplay: Function;
}

export const RecruiterSignup: FC<IProps> = ({ setFormDisplay }) => {
  const defualtForm = { email: '', password: '' };
  const [formData, setFormData] = useState(defualtForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const setError = (field: string) =>
  //   errors ? errors.find((err) => err.field === field) : null;

  return (
    <form className='signup'>
      <h3>Recruiter Signup</h3>
      {signupInputs.map((i, idx) => (
        <Text
          key={idx}
          label={i.label}
          type={i.type}
          name={i.name}
          required={i.required}
          //@ts-ignore
          value={formData[i.formData]}
          onChange={handleChange}
          // error={setError(`${i.errorField}`)}
        />
      ))}
      <button className='btn-primary'>Signup</button>
      <div className='auth-form-wrapper__switch'>
        Are you an applicant?{' '}
        <span onClick={() => setFormDisplay('RENDER_SIGNUP')}>
          Applicant Signup
        </span>
      </div>
      <div className='auth-form-wrapper__switch'>
        Already have an account?
        <span onClick={() => setFormDisplay('RENDER_SIGNIN')}> Signin </span>
      </div>
    </form>
  );
};
