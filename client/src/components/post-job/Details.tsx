import { FC, ChangeEvent } from 'react';
import { Text, Select } from 'components/common/DashInputs';

interface IProps {
  setStep: Function;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formData: any;
}

export const PostJobDetails: FC<IProps> = ({ setStep, onChange, formData }) => {
  const next = () => setStep(1);
  const disabled = !formData.title;
  const btnClassName = disabled ? 'disabled' : '';

  const texts = [
    { label: 'Job Title', name: 'title', required: true },
    { label: 'Company Name', name: 'company' },
    { label: 'Company Link', name: 'link' },
    { label: 'City', name: 'city' },
    { label: 'Country', name: 'country' },
  ];

  const selects = [
    {
      label: 'Position',
      required: true,
      options: ['backend', 'frontend', 'fullstack'],
      name: 'position',
    },
    {
      label: 'Category',
      required: true,
      options: ['web development', 'design', 'data analysis', 'A.I', 'other'],
      name: 'category',
    },
  ];
  return (
    <div className='post-job__step' id='details'>
      <Text item={texts[0]} onChange={onChange} value={formData.title} />
      <Text item={texts[1]} onChange={onChange} value={formData.company} />
      <Text item={texts[2]} onChange={onChange} value={formData.link} />
      <Text item={texts[3]} onChange={onChange} value={formData.city} />
      <Text item={texts[4]} onChange={onChange} value={formData.country} />
      <Select item={selects[0]} onChange={onChange} value={formData.position} />
      <Select item={selects[1]} onChange={onChange} value={formData.category} />
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
