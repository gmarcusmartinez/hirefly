import React, { FC, ChangeEvent } from 'react';
import { TextArea } from 'components/common/DashInputs/TextArea';
import { FileInput } from 'components/common/DashInputs/FileInput';

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

  const disabled = !formData.imgUrl;
  const btnClassName = disabled ? 'disabled' : '';

  const texts = [{ label: 'Bio', name: 'bio' }];
  const files = [
    {
      label: 'Choose Image',
      accept: 'image/*',
      required: true,
      icon: 'photo_camera',
    },
  ];

  return (
    <div className='profile-form__step' id='bio'>
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
