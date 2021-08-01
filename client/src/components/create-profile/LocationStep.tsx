import { FC } from 'react';
import { Text } from 'components/common/TextInput';

interface IProps {
  formData: {
    location: {
      city: string;
      country: string;
    };
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setStep: Function;
}

export const LocationStep: FC<IProps> = ({ formData, onChange, setStep }) => {
  const disabled = !formData.location.city || !formData.location.country;
  const btnClassName = disabled ? 'disabled' : '';
  return (
    <div className='create-profile__step'>
      <div className='create-profile__title'>
        Where are you currently located?
      </div>
      <div className='create-profile__inputs'>
        <Text
          required
          type='string'
          label='City'
          name='location.city'
          value={formData.location.city}
          onChange={onChange}
        />
        <Text
          required
          type='string'
          label='Country'
          name='location.country'
          value={formData.location.country}
          onChange={onChange}
        />
      </div>
      <div className='create-profile__btns'>
        <button className={`create-profile__btn`} onClick={() => setStep(0)}>
          Back
        </button>
        <button
          className={`create-profile__btn ${btnClassName}`}
          disabled={disabled}
          onClick={() => setStep(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
