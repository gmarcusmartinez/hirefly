import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const Themes = () => {
  const { expanded } = useTypedSelector((state) => state.dashboard);

  const { setTheme } = useActions();
  const themes = ['#838dec', '#ffb3ba', '#9ADBB3', '#a9e5ff'];
  return (
    <>
      {expanded && (
        <div className='settings__themes'>
          {themes.map((t, i) => (
            <div
              key={i}
              style={{ backgroundColor: t }}
              onClick={() => setTheme(t)}
            />
          ))}
        </div>
      )}
    </>
  );
};
