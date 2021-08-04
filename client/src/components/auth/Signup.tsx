import { useState, FC } from 'react';
import { Text } from 'components/common/TextInput';
import { signupInputs } from './inputs';
import { useActions } from 'hooks/use-actions';

interface IProps {
  setFormDisplay: Function;
  accountType: string;
}

export const Signup: FC<IProps> = ({ setFormDisplay, accountType }) => {
  const { signup } = useActions();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    accountType,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(formData);
  };
  const title = accountType === 'applicant' ? 'an Applicant' : 'a Recruiter';

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Signup as {title} </h3>

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
          testId={i.testId}
        />
      ))}

      <button className='btn-primary'>Signup</button>
      <div className='auth-form-wrapper__switch'>
        Change
        <span onClick={() => setFormDisplay('RENDER_SELECT')}>
          {' '}
          Account Type{' '}
        </span>
      </div>
    </form>
  );
};
