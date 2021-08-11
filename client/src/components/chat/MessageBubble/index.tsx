import { FC } from 'react';
import { IMessage } from 'interfaces';
import { Container } from './styles';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  msg: IMessage;
}

export const MessageBubble: FC<IProps> = ({ msg }) => {
  const { currentUser } = useTypedSelector((state) => state.auth);
  const style = currentUser?._id === msg.sender ? '' : 'partner';
  return <Container color={style}>{msg.content}</Container>;
};
