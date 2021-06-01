import { FC, MouseEvent } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  text: string;
  icon: string;
  cb: (event: MouseEvent<HTMLDivElement>) => void;
}
export const SettingsLink: FC<IProps> = ({ text, icon, cb }) => {
  const { mode, theme, expanded } = useTypedSelector(
    (state) => state.dashboard
  );
  const displayText = !expanded ? 'hide-text' : 'display-text';

  return (
    <div className={`settings__link ${mode}`} onClick={cb}>
      {!expanded && <span className='material-icons'>{icon}</span>}
      <span className={`${displayText}`}>{text}</span>
      <div style={{ backgroundColor: theme }}></div>
    </div>
  );
};
