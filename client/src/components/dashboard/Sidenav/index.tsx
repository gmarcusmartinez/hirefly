import { useTypedSelector } from 'hooks/use-typed-selector';
import { Header } from './Header';
import { Main } from './Main';

export const Sidenav = () => {
  const { expanded, mode } = useTypedSelector(({ dashboard }) => dashboard);
  return (
    <div className={`sidenav ${expanded ? 'expand' : 'retract'} ${mode}`}>
      <Header />
      <Main />
    </div>
  );
};
