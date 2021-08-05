import { FC, ChangeEvent } from 'react';
import { Text, Select } from 'components/common/DashInputs';

interface IProps {
  setStep: Function;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formData: any;
}

export const BasicInfo: FC<IProps> = ({ setStep, onChange, formData }) => {
  const next = () => setStep(1);
  const disabled = !formData.firstName || !formData.lastName;
  const btnClassName = disabled ? 'disabled' : '';

  const texts = [
    { label: 'First Name', name: 'firstName', required: true },
    { label: 'Family Name', name: 'lastName', required: true },
    { label: 'City', name: 'city' },
    { label: 'Country', name: 'country' },
  ];

  const selects = [
    {
      label: 'Gender',
      required: true,
      options: ['male', 'female', 'nonbinary'],
      name: 'gender',
    },
  ];
  return (
    <div className='profile-form__step' id='basic'>
      <Text item={texts[0]} onChange={onChange} value={formData.firstName} />
      <Text item={texts[1]} onChange={onChange} value={formData.lastName} />
      <Text item={texts[2]} onChange={onChange} value={formData.city} />
      <Text item={texts[3]} onChange={onChange} value={formData.country} />
      <Select item={selects[0]} onChange={onChange} value={formData.gender} />
      <button
        onClick={next}
        className={`step-btn ${btnClassName}`}
        disabled={disabled}
      >
        Next
      </button>
    </div>
  );
};
