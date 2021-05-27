import { useTypedSelector } from 'hooks/use-typed-selector';
import { ModeSwitch } from './ModeSwitch';

export const Modes = () => {
  const { mode, theme, expanded } = useTypedSelector(
    ({ dashboard }) => dashboard
  );
  const flexDirection = expanded ? 'row' : 'column';
  const light = mode === 'light' ? theme : '#e5e5e5';
  const dark = mode === 'dark' ? theme : '#e5e5e5';

  return (
    <div className='settings__modes' style={{ flexDirection }}>
      <ModeSwitch mode='light' color={light} />
      <ModeSwitch mode='dark' color={dark} />
    </div>
  );
};
