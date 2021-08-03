import { useTypedSelector } from 'hooks/use-typed-selector';
import { Main } from './Main';

export const Sidenav = () => {
  const { expanded, mode } = useTypedSelector(({ dashboard }) => dashboard);
  return (
    <div className={`sidenav ${expanded ? 'expand' : 'retract'} ${mode}`}>
      <Main />
    </div>
  );
};
