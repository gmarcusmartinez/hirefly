import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { DashHeader } from 'components/common/DashHeader';
import { blankForm } from 'screens/PostJob/form';
import { PostJobSteps } from 'components/job-form/Steps';
import { PostJobDetails } from 'components/job-form/Details';
import { PostJobPayment } from 'components/job-form/Payment';
import { PostJobDesc } from 'components/job-form/Desc';
import { PostJobSkills } from 'components/job-form/Skills';

export const PostJob = () => {
  const [step, setStep] = React.useState(0);
  const { errors } = useTypedSelector(({ jobs }) => jobs);

  const [formData, setFormData] = React.useState(blankForm);
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
    <div className='job-form'>
      <DashHeader title='Post Job' />
      <div className='job-form__main'>
        <PostJobSteps step={step} />
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
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
