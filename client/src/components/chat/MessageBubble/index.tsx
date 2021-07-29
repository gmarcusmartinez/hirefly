import { FC } from 'react';
import { IMessage } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  msg: IMessage;
}

export const MessageBubble: FC<IProps> = ({ msg }) => {
  const { currentUser } = useTypedSelector((state) => state.auth);
  const bubbleStyle = currentUser?._id === msg.sender ? 'mine' : 'thiers';

  return <div className={`message-bubble ${bubbleStyle}`}>{msg.content}</div>;
};
