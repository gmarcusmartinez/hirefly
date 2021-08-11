import { FC } from 'react';
import { Container, Message } from './styles';

interface IProps {
  alert: {
    alertType: string;
    msg: string;
    redirect?: string;
  };
}

export const AlertItem: FC<IProps> = ({ alert }) => {
  const className = `${alert.alertType}`;
  return (
    <Container>
      <Message className={className}>{alert.msg}</Message>
    </Container>
  );
};
