import { useTypedSelector } from 'hooks/use-typed-selector';
import { useHistory } from 'react-router';
import { ChatsBtn } from './ChatsBtn';
import { SettingsLink } from './Link';
import { Modes } from './Modes';
import { Themes } from './Themes';

export const Settings = () => {
  const history = useHistory();
  const redirectToEdit = () => history.push('/dashboard/profile-form');
  const redirectToSignout = () => history.push('/dashboard/signout');

  const { me } = useTypedSelector((state) => state.profiles);
  return (
    <div className='settings'>
      <Themes />
      <Modes />
      <ChatsBtn />
      <SettingsLink
        text={`${me ? 'Edit' : 'Create'} Profile`}
        icon='edit'
        cb={() => redirectToEdit()}
      />
      <SettingsLink
        text='Signout'
        icon='logout'
        cb={() => redirectToSignout()}
      />
    </div>
  );
};
