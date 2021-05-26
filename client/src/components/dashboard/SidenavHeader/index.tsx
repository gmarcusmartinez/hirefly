import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const SidenavHeader = () => {
  const { toggleSidenav, setSidenavComponent } = useActions();
  const { expand, sidenavComponent } = useTypedSelector(
    ({ dashboard }) => dashboard
  );

  const displaySettings = () => setSidenavComponent('SETTINGS');
  const className = `material-icons ${expand ? 'rotate' : ''}`;
  const centerPp = sidenavComponent === 'SETTINGS' ? 'center-pp' : '';

  return (
    <div className='sidenav__header' onClick={displaySettings}>
      <div className={`sidenav__header__profile-img ${centerPp}`} />
      <span className={`sidenav__header__name ${centerPp}`}>Marcus</span>
      <i className={className} onClick={() => toggleSidenav(!expand)}>
        chevron_right
      </i>
    </div>
  );
};
