import React from 'react';
import { blankForm } from './inputs';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { texts, selects, files } from './inputs';
import { Text, Select, FileInput } from 'components/common/DashInputs';
import { Spinner } from 'components/common/Spinner';

export const ProfileForm = () => {
  const { createProfile } = useActions();
  const { theme } = useTypedSelector(({ dashboard }) => dashboard);
  const { loading, me } = useTypedSelector(({ profiles }) => profiles);
  const defaultForm = me ? me : blankForm;
  const [formData, setFormData] = React.useState(defaultForm);
  const [imageData, setImageData] = React.useState<File | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageData(e.target.files![0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProfile(formData, imageData);
  };

  if (loading) return <Spinner />;
  return (
    <form className='profile-form' onSubmit={handleSubmit}>
      <Text onChange={onChange} item={texts[0]} value={formData.firstName} />
      <Text onChange={onChange} item={texts[1]} value={formData.lastName} />
      <Text onChange={onChange} item={texts[2]} value={formData.location} />
      <Text onChange={onChange} item={texts[3]} value={formData.link} />
      <Text onChange={onChange} item={texts[4]} value={formData.bio} />
      <FileInput item={files[0]} onChange={onImgChange} file={imageData} />
      <FileInput item={files[1]} onChange={() => {}} file={null} />
      <Select item={selects[1]} onChange={onChange} />
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};
