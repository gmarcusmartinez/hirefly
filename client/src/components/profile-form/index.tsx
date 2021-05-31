import { textInputs, selectInputs, bio, fileInputs } from './inputs';
import { DashTextInput } from 'components/common/DashInputs/Text';
import { DashSelectInput } from 'components/common/DashInputs/Select';
import { DashFileInput } from 'components/common/DashInputs/FileInput';

export const ProfileForm = () => {
  return (
    <div className='profile-form'>
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
    </div>
  );
};
