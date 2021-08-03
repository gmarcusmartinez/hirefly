import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';

interface IProps {
  title: string;
}

export const DashHeader: FC<IProps> = ({ title }) => {
  const { toggleSidenav } = useActions();
  const { mode, expanded } = useTypedSelector(({ dashboard }) => dashboard);

  const bar = `bar ${expanded ? 'change' : ''}`;
  const bars = [...Array(3)].map((_, i) => <div key={i} className={bar} />);

  const toggle = (e: any) => {
    e.stopPropagation();
    toggleSidenav(!expanded);
  };

  return (
    <div className={`dash-header ${mode}`}>
      <h2>{title}</h2>
      <div className={`menu-bars ${mode}`} onClick={toggle}>
        {bars}
      </div>
    </div>
  );
};
