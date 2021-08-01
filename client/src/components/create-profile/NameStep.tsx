import { FC } from 'react';
import { Text } from 'components/common/TextInput';

interface IProps {
  formData: {
    firstName: string;
    lastName: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setStep: Function;
}

export const NameStep: FC<IProps> = ({ formData, onChange, setStep }) => {
  const disabled = !formData.firstName || !formData.lastName;
  const btnClassName = disabled ? 'disabled' : '';
  return (
    <div className='create-profile__step'>
      <div className='create-profile__title'>Let's get to know you!</div>
      <div className='create-profile__inputs'>
        <Text
          required
          type='string'
          label='First Name'
          name='firstName'
          value={formData.firstName}
          onChange={onChange}
        />
        <Text
          required
          type='string'
          label='Last Name'
          name='lastName'
          value={formData.lastName}
          onChange={onChange}
        />
      </div>
      <div className='create-profile__btns'>
        <button
          className={`create-profile__btn ${btnClassName}`}
          disabled={disabled}
          onClick={() => setStep(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
