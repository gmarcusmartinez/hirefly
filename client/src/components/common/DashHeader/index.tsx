import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { MenuBars, Bar } from '../MenuBars';
import { Container, Title } from './styles';

export const DashHeader = () => {
  const { toggleSidenav } = useActions();
  const { mode, expanded, header } = useTypedSelector(
    (state) => state.dashboard
  );

  const toggle = () => toggleSidenav(!expanded);
  const className = `bar ${expanded ? 'change' : ''}`;
  const bars = [...Array(3)].map((_, i) => <Bar className={className} />);

  return (
    <Container className={mode}>
      <Title>{header}</Title>
      <MenuBars color={mode} onClick={toggle}>
        {bars}
      </MenuBars>
    </Container>
  );
};
