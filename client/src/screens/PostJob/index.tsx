import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ErrorsContainer } from 'components/common/ErrorsContainer';
import { DashHeader } from 'components/common/DashHeader';
import { blankForm } from 'screens/PostJob/form';
import { PostJobSteps } from 'components/post-job/Steps';
import { PostJobDetails } from 'components/post-job/Details';
import { PostJobPayment } from 'components/post-job/Payment';
import { PostJobDesc } from 'components/post-job/Desc';
import { PostJobSkills } from 'components/post-job/Skills';

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

  return (
    <div className='post-job'>
      <DashHeader title='Post Job' />
      <div className='post-job__main'>
        <PostJobSteps step={step} />
        <div className='post-job__steps-active'>
          <div
            className='post-job__steps-wrapper'
            style={{
              transform: `translateX(-${step * 100}%)`,
            }}
          >
            <PostJobDetails
              setStep={setStep}
              onChange={onChange}
              formData={formData}
            />
            <PostJobPayment
              setStep={setStep}
              onChange={onChange}
              formData={formData}
            />
            <PostJobDesc
              setStep={setStep}
              onChange={onChange}
              formData={formData}
              imageData={imageData}
              onImgChange={onImgChange}
            />
            <PostJobSkills
              setStep={setStep}
              onChange={onChange}
              formData={formData}
            />
          </div>
        </div>
        <ErrorsContainer errors={errors ? errors : null} />
      </div>
    </div>
  );
};
