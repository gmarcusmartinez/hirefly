import { SettingsLink } from './Link';
import { Modes } from './Modes';
import { Themes } from './Themes';

export const Settings = () => {
  return (
    <div className='settings'>
      <Themes />
      <Modes />
      {/* <SettingsLink text='Edit Profile' />
      <SettingsLink text='Signout' /> */}
    </div>
  );
};
