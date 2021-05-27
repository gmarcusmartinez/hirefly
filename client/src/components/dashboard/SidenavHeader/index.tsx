import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const SidenavHeader = () => {
  const { toggleSidenav, setSidenavComponent } = useActions();
  const { expanded, theme, mode } = useTypedSelector(
    ({ dashboard }) => dashboard
  );

  const displaySettings = () => setSidenavComponent('SETTINGS');
  const className = `material-icons ${expanded ? 'rotate' : ''}`;
  const darkmode = mode === 'dark' ? 'darkmode' : '';

  const toggle = (e: any) => {
    e.stopPropagation();
    toggleSidenav(!expanded);
  };
  return (
    <div className='sidenav__header' onClick={displaySettings}>
      <div className='sidenav__header__profile-img' />
      <span className={`sidenav__header__name ${darkmode}`}>Marcus</span>
      <i className={className} onClick={toggle} style={{ color: theme }}>
        chevron_right
      </i>
    </div>
  );
};
