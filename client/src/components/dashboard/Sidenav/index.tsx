import { useTypedSelector } from 'hooks/use-typed-selector';
import { Header } from './Header';
import { Main } from './Main';

export const Sidenav = () => {
  const { expanded, mode } = useTypedSelector(({ dashboard }) => dashboard);
  const darkmode = mode === 'dark' ? 'darkmode' : '';
  return (
    <div className={`sidenav ${expanded ? 'expand' : 'retract'} ${darkmode}`}>
      <Header />
      <Main />
    </div>
  );
};
