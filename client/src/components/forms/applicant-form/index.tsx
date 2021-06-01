import React from 'react';
import { textInputs, selectInputs, fileInputs } from './inputs';
import { defaultForm } from './inputs';
import { DashTextInput } from 'components/common/DashInputs/Text';
import { DashSelectInput } from 'components/common/DashInputs/Select';
import { DashFileInput } from 'components/common/DashInputs/FileInput';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';

export const ApplicantForm = () => {
  const { theme } = useTypedSelector((state) => state.dashboard);
  const [formData, setFormData] = React.useState(defaultForm);
  const [imageData, setImageData] = React.useState<File | null>(null);

  const { createApplicant } = useActions();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageData(e.target.files![0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createApplicant(formData, imageData);
  };
  return (
    <form className='applicant-form' onSubmit={handleSubmit}>
      {textInputs.map((t, i) => (
        <DashTextInput
          key={i}
          item={t}
          onChange={handleChange}
          //@ts-ignore
          value={formData[t.name]}
        />
      ))}
      {fileInputs.map((item, i) => (
        <DashFileInput key={i} item={item} onChange={handleFileChange} />
      ))}
      {selectInputs.map((item, i) => (
        <DashSelectInput
          key={i}
          item={item}
          //@ts-ignore
          value={formData[item.name]}
          onChange={handleChange}
        />
      ))}
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};
