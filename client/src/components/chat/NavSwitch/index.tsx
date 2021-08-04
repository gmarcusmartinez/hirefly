import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const NavSwitch = () => {
  const { setSidenavComponent } = useActions();
  const { mode } = useTypedSelector((state) => state.dashboard);
  const handleClick = () => setSidenavComponent('LINKS');

  return (
    <div className={`dashboard-nav-switch ${mode}`} onClick={handleClick}>
      <i className='material-icons'>menu</i>
    </div>
  );
};
