import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Modes = () => {
  const { toggleMode } = useActions();
  const { mode, theme, expanded } = useTypedSelector(
    ({ dashboard }) => dashboard
  );

  const lightmode = mode === 'light' ? theme : '';
  const darkmode = mode === 'dark' ? theme : '';

  return (
    <>
      {expanded && (
        <div className='settings__modes'>
          <span
            className='material-icons'
            onClick={() => toggleMode('light')}
            style={{ color: lightmode }}
          >
            light_mode
          </span>
          <span
            className='material-icons'
            onClick={() => toggleMode('dark')}
            style={{ color: darkmode }}
          >
            dark_mode
          </span>
        </div>
      )}
    </>
  );
};
