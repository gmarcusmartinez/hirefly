import { FC, ChangeEvent } from 'react';
import { TextArea } from 'components/common/DashInputs/TextArea';
import { FileInput } from 'components/common/DashInputs/FileInput';

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
  const disabled = !imageData;
  const btnClassName = disabled ? 'disabled' : '';

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
    <div className='post-job__step' id='desc'>
      <FileInput item={files[0]} onChange={onImgChange} file={imageData} />
      <TextArea
        onChange={onChange}
        item={texts[0]}
        value={formData.description}
      />
      <button onClick={prev} className='step-btn'>
        Back
      </button>
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
