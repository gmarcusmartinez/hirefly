import { AlertItem } from 'components/alerts/AlertItem';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IAlert } from 'interfaces';
import { Container } from './styles';

export const AlertContainer = () => {
  const { items } = useTypedSelector((state) => state.alerts);
  let list = items.map((a: IAlert) => <AlertItem alert={a} />);
  return <Container>{list}</Container>;
};
