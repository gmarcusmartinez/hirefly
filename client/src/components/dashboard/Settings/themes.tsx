import { useActions } from 'hooks/use-actions';

export const Themes = () => {
  const { setTheme } = useActions();
  const themes = ['#838dec', '#ffcba4', '#9ADBB3', '#a9e5ff'];
  return (
    <div className='settings__themes'>
      {themes.map((t, i) => (
        <div
          key={i}
          style={{ backgroundColor: t }}
          onClick={() => setTheme(t)}
        />
      ))}
    </div>
  );
};
