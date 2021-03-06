import { FC, ChangeEvent } from 'react';
import { Text, Select } from 'components/common/DashInputs';
import { FormStep, FormStepBtn } from 'components/common/FormStep';

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
    <FormStep id='details'>
      <Text item={texts[0]} onChange={onChange} value={formData.title} />
      <Text item={texts[1]} onChange={onChange} value={formData.company} />
      <Text item={texts[2]} onChange={onChange} value={formData.link} />
      <Select item={selects[0]} onChange={onChange} value={formData.position} />
      <Select item={selects[1]} onChange={onChange} value={formData.category} />
      <FormStepBtn onClick={next} className={btnClassName} disabled={disabled}>
        Next
      </FormStepBtn>
    </FormStep>
  );
};
