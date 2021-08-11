import { FC, ChangeEvent } from 'react';
import { Text } from 'components/common/DashInputs';
import { FormStep, FormStepBtn } from 'components/common/FormStep';

interface IProps {
  setStep: Function;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: any;
}

export const PostJobPayment: FC<IProps> = ({ setStep, onChange, formData }) => {
  const prev = () => setStep(0);
  const next = () => setStep(2);

  const texts = [
    { label: 'Min Salary €', name: 'minSalary' },
    { label: 'Max Salary €', name: 'maxSalary' },
    { label: 'City', name: 'city' },
    { label: 'Country', name: 'country' },
  ];

  return (
    <FormStep id='payment'>
      <Text
        item={texts[0]}
        onChange={onChange}
        value={formData.minSalary}
        inputType='number'
      />
      <Text
        item={texts[1]}
        onChange={onChange}
        value={formData.maxSalary}
        inputType='number'
      />
      <Text item={texts[2]} onChange={onChange} value={formData.city} />
      <Text item={texts[3]} onChange={onChange} value={formData.country} />
      <FormStepBtn onClick={prev}>Back</FormStepBtn>
      <FormStepBtn onClick={next}>Next</FormStepBtn>
    </FormStep>
  );
};
