import { useState, FC } from 'react';
import { Text } from 'components/common/TextInput';
import { signinInputs } from './inputs';
import { useActions } from 'hooks/use-actions';

interface IProps {
  setFormDisplay: Function;
}

export const Signin: FC<IProps> = ({ setFormDisplay }) => {
  const { signin } = useActions();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(formData);
  };

  return (
    <form className='signin' onSubmit={handleSubmit}>
      <h3>Signin To Your Account</h3>
      {signinInputs.map((i, idx) => (
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
      <button className='btn-primary'>Signin</button>
      <div className='auth-form-wrapper__switch'>
        Dont have an account?
        <span onClick={() => setFormDisplay('RENDER_SELECT')}> Signup </span>
      </div>
    </form>
  );
};
