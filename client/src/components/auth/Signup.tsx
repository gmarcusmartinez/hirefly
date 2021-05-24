import { useState, FC } from 'react';
import { Text } from 'components/common/TextInput';
import { signupInputs } from './inputs';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  setFormDisplay: Function;
}

export const Signup: FC<IProps> = ({ setFormDisplay }) => {
  const { signup } = useActions();
  const { errors } = useTypedSelector((state) => state.auth);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(formData, 'applicant');
    setFormData({ email: '', password: '' });
  };

  const setError = (field: string) =>
    errors ? errors.find((err) => err.field === field) : null;

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Signup For An Account</h3>

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
          error={setError(`${i.errorField}`)}
        />
      ))}

      <button className='btn-primary'>Signup</button>
      <div className='auth-form-wrapper__switch'>
        Are you a Recruiter?{' '}
        <span onClick={() => setFormDisplay('RENDER_SIGNUP_RECRUITER')}>
          Recruiter Signup
        </span>
      </div>
      <div className='auth-form-wrapper__switch'>
        Already have an account?
        <span onClick={() => setFormDisplay('RENDER_SIGNIN')}> Signin </span>
      </div>
    </form>
  );
};
