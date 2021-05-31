import { textInputs, fileInputs } from './inputs';
import { DashTextInput } from 'components/common/DashInputs/Text';
import { DashFileInput } from 'components/common/DashInputs/FileInput';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const RecruiterForm = () => {
  const { theme } = useTypedSelector((state) => state.dashboard);

  return (
    <form className='recruiter-form'>
      {textInputs.map((t, i) => (
        <DashTextInput key={i} item={t} />
      ))}
      {fileInputs.map((t, i) => (
        <DashFileInput key={i} item={t} />
      ))}
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};
