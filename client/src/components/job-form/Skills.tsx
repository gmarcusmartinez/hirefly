import { FC, ChangeEvent } from 'react';
import { Text } from 'components/common/DashInputs';
import { FormStep, FormStepBtn } from 'components/common/FormStep';

interface IProps {
  setStep: Function;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formData: any;
  handleSubmit: Function;
}

export const PostJobSkills: FC<IProps> = ({
  setStep,
  onChange,
  formData,
  handleSubmit,
}) => {
  const prev = () => setStep(2);
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
    <FormStep id='skills'>
      <Text item={texts[0]} onChange={onChange} value={formData.skills} />
      <FormStepBtn onClick={prev}>Back</FormStepBtn>
      <FormStepBtn
        onClick={() => handleSubmit()}
        className={btnClassName}
        disabled={disabled}
      >
        Submit
      </FormStepBtn>
    </FormStep>
  );
};
