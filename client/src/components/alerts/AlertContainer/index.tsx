import { AlertItem } from 'components/alerts/AlertItem';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IAlert } from 'interfaces';

export const AlertContainer = () => {
  const { items } = useTypedSelector((state) => state.alerts);
  let list = items.map((a: IAlert) => <AlertItem alert={a} />);
  return <div className='alert-container'>{list}</div>;
};
