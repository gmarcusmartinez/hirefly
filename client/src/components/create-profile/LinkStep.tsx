import { FC } from 'react';
import { Text } from 'components/common/TextInput';

interface IProps {
  formData: {
    link: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setStep: Function;
}

export const LinkStep: FC<IProps> = ({ formData, onChange, setStep }) => {
  const btnText = formData.link ? 'Next' : 'Skip';
  return (
    <div className='create-profile__step'>
      <div className='create-profile__title'>
        Would you like to add your linkedin profile link?
      </div>
      <div className='create-profile__inputs'>
        <Text
          required
          type='string'
          label='Linkedin'
          name='link'
          value={formData.link}
          onChange={onChange}
        />
      </div>
      <div className='create-profile__btns'>
        <button className='create-profile__btn' onClick={() => setStep(2)}>
          Back
        </button>
        <button className='create-profile__btn' onClick={() => setStep(3)}>
          {btnText}
        </button>
      </div>
    </div>
  );
};
