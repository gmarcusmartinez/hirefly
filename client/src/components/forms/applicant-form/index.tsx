import { textInputs, selectInputs, bio, fileInputs } from './inputs';
import { DashTextInput } from 'components/common/DashInputs/Text';
import { DashSelectInput } from 'components/common/DashInputs/Select';
import { DashFileInput } from 'components/common/DashInputs/FileInput';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const ApplicantForm = () => {
  const { theme } = useTypedSelector((state) => state.dashboard);

  return (
    <form className='applicant-form'>
      {textInputs.map((t, i) => (
        <DashTextInput key={i} item={t} />
      ))}
      {fileInputs.map((t, i) => (
        <DashFileInput key={i} item={t} />
      ))}
      {selectInputs.map((t, i) => (
        <DashSelectInput key={i} item={t} />
      ))}
      <DashTextInput item={bio} />
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};
