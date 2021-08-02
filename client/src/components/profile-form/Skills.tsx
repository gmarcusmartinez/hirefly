import { FC, ChangeEvent } from 'react';
import { Text } from 'components/common/DashInputs';

interface IProps {
  setStep: Function;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formData: any;
}

export const CreateProfileSkills: FC<IProps> = ({
  setStep,
  onChange,
  formData,
}) => {
  const prev = () => setStep(1);
  const submit = () => console.log(formData);

  const disabled = !formData.skills;
  const btnClassName = disabled ? 'disabled' : '';

  const texts = [
    {
      label: 'Skills',
      name: 'skills',
      info: 'separate with commas',
      required: true,
    },
  ];

  return (
    <div className='profile-form__step' id='cp-skills'>
      <Text item={texts[0]} onChange={onChange} value={formData.skills} />
      <button onClick={prev} className='step-btn'>
        Back
      </button>
      <button
        onClick={submit}
        className={`step-btn ${btnClassName}`}
        disabled={disabled}
      >
        Submit
      </button>
    </div>
  );
};
