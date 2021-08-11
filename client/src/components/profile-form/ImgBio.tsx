import { FC, ChangeEvent } from 'react';
import { Text } from 'components/common/DashInputs';
import { TextArea } from 'components/common/DashInputs/TextArea';
import { FileInput } from 'components/common/DashInputs/FileInput';
import { FormStep, FormStepBtn } from 'components/common/FormStep';
import { texts, files } from './form';

interface IProps {
  setStep: Function;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: any;
  imageData: any;
}

export const ImgBio: FC<IProps> = ({
  setStep,
  onChange,
  formData,
  onImgChange,
  imageData,
}) => {
  const prev = () => setStep(0);
  const next = () => setStep(2);

  const disabled = imageData || formData.imgUrl ? false : true;
  const className = disabled ? 'disabled' : '';

  return (
    <FormStep id='bio'>
      <FileInput
        item={files[0]}
        onChange={onImgChange}
        file={imageData}
        url={formData.imgUrl}
      />
      <Text item={texts[4]} onChange={onChange} value={formData.link} />

      <TextArea
        onChange={onChange}
        item={texts[5]}
        value={formData.description}
      />
      <FormStepBtn onClick={prev}>Back</FormStepBtn>
      <FormStepBtn onClick={next} className={className} disabled={disabled}>
        Next
      </FormStepBtn>
    </FormStep>
  );
};
