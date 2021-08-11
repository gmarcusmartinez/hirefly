import { OverLay, Message, Container } from './styles';

export const Spinner = ({ message }: { message?: string }) => (
  <OverLay>
    {message && <Message>{message}</Message>}
    <Container />
  </OverLay>
);
