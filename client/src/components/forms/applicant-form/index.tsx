import React from 'react';
import { textInputs, selectInputs, bio, fileInputs } from './inputs';
import { defaultForm } from './inputs';
import { DashTextInput } from 'components/common/DashInputs/Text';
import { DashSelectInput } from 'components/common/DashInputs/Select';
import { DashFileInput } from 'components/common/DashInputs/FileInput';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const ApplicantForm = () => {
  const { theme } = useTypedSelector((state) => state.dashboard);
  const [formData, setFormData] = React.useState(defaultForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className='applicant-form' onSubmit={handleSubmit}>
      {textInputs.map((t, i) => (
        <DashTextInput
          key={i}
          item={t}
          onChange={handleChange}
          //@ts-ignore
          value={formData[t.value]}
        />
      ))}
      {fileInputs.map((t, i) => (
        <DashFileInput key={i} item={t} />
      ))}
      {selectInputs.map((t, i) => (
        <DashSelectInput key={i} item={t} />
      ))}
      <DashTextInput
        item={bio}
        onChange={handleChange}
        //@ts-ignore
        value={formData.bio}
      />
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};
