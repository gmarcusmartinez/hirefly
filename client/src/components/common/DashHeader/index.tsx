import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const DashHeader = () => {
  const { toggleSidenav } = useActions();
  const { mode, expanded, header } = useTypedSelector(
    (state) => state.dashboard
  );

  const toggle = () => toggleSidenav(!expanded);
  const bar = `bar ${expanded ? 'change' : ''}`;
  const bars = [...Array(3)].map((_, i) => <div key={i} className={bar} />);

  return (
    <div className={`dashboard__header ${mode}`}>
      <h2>{header}</h2>
      <div className={`menu-bars ${mode}`} onClick={toggle}>
        {bars}
      </div>
    </div>
  );
};
