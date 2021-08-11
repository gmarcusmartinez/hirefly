import { FC, ChangeEvent } from 'react';
import { TextArea } from 'components/common/DashInputs/TextArea';
import { FileInput } from 'components/common/DashInputs/FileInput';
import { FormStep, FormStepBtn } from 'components/common/FormStep';

interface IProps {
  setStep: Function;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: any;
  imageData: any;
}

export const PostJobDesc: FC<IProps> = ({
  setStep,
  onChange,
  formData,
  onImgChange,
  imageData,
}) => {
  const prev = () => setStep(1);
  const next = () => setStep(3);

  const texts = [{ label: 'Description', name: 'description' }];
  const files = [
    {
      label: 'Choose Image',
      accept: 'image/*',
      required: true,
      icon: 'photo_camera',
    },
  ];
  return (
    <FormStep id='desc'>
      <FileInput
        item={files[0]}
        onChange={onImgChange}
        file={imageData}
        url={formData.imgUrl}
      />
      <TextArea
        onChange={onChange}
        item={texts[0]}
        value={formData.description}
      />
      <FormStepBtn onClick={prev}>Back</FormStepBtn>
      <FormStepBtn onClick={next}>Next</FormStepBtn>
    </FormStep>
  );
};
