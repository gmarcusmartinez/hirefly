import { useTypedSelector } from 'hooks/use-typed-selector';
import { Switch } from './Switch';

export const Modes = () => {
  const { mode, theme, expanded } = useTypedSelector(
    ({ dashboard }) => dashboard
  );
  const flexDirection = expanded ? 'row' : 'column';
  const light = mode === 'light' ? theme : '#e5e5e5';
  const dark = mode === 'darkmode' ? theme : '#e5e5e5';

  return (
    <div className='settings__modes' style={{ flexDirection }}>
      <Switch mode='light' color={light} />
      <Switch mode='darkmode' color={dark} />
    </div>
  );
};
