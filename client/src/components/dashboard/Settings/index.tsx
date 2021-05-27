import { useTypedSelector } from 'hooks/use-typed-selector';
import { Modes } from './modes';
import { Themes } from './themes';

export const Settings = () => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  const darkmode = mode === 'dark' ? 'darkmode' : '';
  return (
    <div className='settings'>
      <div className={`settings__link ${darkmode}`}>Edit Profile</div>
      <Themes />
      <Modes />
      <div className={`settings__link ${darkmode}`}>Signout</div>
    </div>
  );
};
