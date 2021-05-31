import { useTypedSelector } from 'hooks/use-typed-selector';
import { Theme } from './Theme';

export const Themes = () => {
  const { expanded, theme } = useTypedSelector((state) => state.dashboard);
  const display = expanded ? 'flex' : '';
  const themes = ['#838dec', '#ff9999', '#9ADBB3', '#779ecb'];
  const list = themes.map((t) => <Theme key={t} t={t} />);

  return (
    <>
      <div className='settings__themes' style={{ display }}>
        {list}
      </div>
      {!expanded && (
        <div className='selected-theme' style={{ backgroundColor: theme }} />
      )}
    </>
  );
};
