import React, { FC } from 'react';
import { BasicInfo } from 'components/profile-form/BasicInfo';
import { ImgBio } from 'components/profile-form/ImgBio';
import { CreateProfileSkills } from 'components/profile-form/Skills';
import { blankForm } from './form';
import { useActions } from 'hooks/use-actions';
import { Active, Wrapper } from 'components/common/Form';

interface IProps {
  me?: any;
  step: number;
  setStep: Function;
}

export const ProfileForm: FC<IProps> = ({ step, setStep, me }) => {
  const defaultForm = me ? me : blankForm;
  const { createProfile, updateProfile } = useActions();
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

  const handleSubmit = () => {
    me
      ? updateProfile(formData, imageData)
      : createProfile(formData, imageData);
  };

  const props = { formData, onChange, setStep };
  const style = { transform: `translateX(-${step * 100}%)` };

  return (
    <Active>
      <Wrapper style={style}>
        <BasicInfo {...props} />
        <ImgBio {...props} imageData={imageData} onImgChange={onImgChange} />
        <CreateProfileSkills {...props} handleSubmit={handleSubmit} />
      </Wrapper>
    </Active>
  );
};
