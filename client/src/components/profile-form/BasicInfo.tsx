import { FC, ChangeEvent } from 'react';
import { Text, Select } from 'components/common/DashInputs';
import { FormStep, FormStepBtn } from 'components/common/FormStep';
import { texts, selects } from './form';

interface IProps {
  setStep: Function;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formData: any;
}

export const BasicInfo: FC<IProps> = ({ setStep, onChange, formData }) => {
  const next = () => setStep(1);
  const disabled = !formData.firstName || !formData.lastName;
  const btnClassName = disabled ? 'disabled' : '';

  return (
    <FormStep id='basic'>
      <Text item={texts[0]} onChange={onChange} value={formData.firstName} />
      <Text item={texts[1]} onChange={onChange} value={formData.lastName} />
      <Text item={texts[2]} onChange={onChange} value={formData.city} />
      <Text item={texts[3]} onChange={onChange} value={formData.country} />
      <Select item={selects[0]} onChange={onChange} value={formData.gender} />
      <FormStepBtn onClick={next} className={btnClassName} disabled={disabled}>
        Next
      </FormStepBtn>
    </FormStep>
  );
};
