import React, { FC } from 'react';
import { PostJobDetails } from 'components/job-form/Details';
import { PostJobPayment } from 'components/job-form/Payment';
import { PostJobDesc } from 'components/job-form/Desc';
import { PostJobSkills } from 'components/job-form/Skills';
import { blankForm } from './form';

interface IProps {
  selected?: any;
  step: number;
  setStep: Function;
}

export const JobForm: FC<IProps> = ({ step, setStep, selected }) => {
  const defaultForm = selected ? selected : blankForm;
  const [formData, setFormData] = React.useState(defaultForm);
  const [imageData, setImageData] = React.useState<File | null>(null);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageData(e.target.files![0]);
  };

  const props = { formData, onChange, setStep };

  return (
    <div className='job-form__steps-active'>
      <div
        className='job-form__steps-wrapper'
        style={{
          transform: `translateX(-${step * 100}%)`,
        }}
      >
        <PostJobDetails {...props} />
        <PostJobPayment {...props} />
        <PostJobDesc
          {...props}
          imageData={imageData}
          onImgChange={onImgChange}
        />
        <PostJobSkills {...props} />
      </div>
    </div>
  );
};
