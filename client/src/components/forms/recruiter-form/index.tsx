import React from 'react';
import { textInputs, defaultForm } from './inputs';
import { Text } from 'components/common/DashInputs/Text';
// import { FileInput } from 'components/common/DashInputs/FileInput';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const RecruiterForm = () => {
  const { theme } = useTypedSelector((state) => state.dashboard);
  const [formData, setFormData] = React.useState(defaultForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form className='recruiter-form'>
      {textInputs.map((t, i) => (
        <Text
          key={i}
          item={t}
          onChange={handleChange}
          //@ts-ignore
          value={formData[t.value]}
        />
      ))}
      {/* {fileInputs.map((t, i) => (
        <DashFileInput key={i} item={t} />
      ))} */}
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};
