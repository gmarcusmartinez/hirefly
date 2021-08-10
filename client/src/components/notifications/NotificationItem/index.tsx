import { FC } from 'react';
import { s3Url } from 'api/s3url';
import { INotification } from 'interfaces';
import { notificationTypes } from './notification-types';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import { DeleteNotification } from '../DeleteNotification';
import { Wrapper, Content } from './styles';

interface IProps {
  notification: INotification;
}

export const NotificationItem: FC<IProps> = ({ notification }) => {
  const { _id, userFrom, notificationType, entityId } = notification;
  const { redirectToChat } = useActions();

  const { mode } = useTypedSelector((state) => state.dashboard);
  const { currentUser } = useTypedSelector((state) => state.auth);

  const redirect = () => {
    if (notificationType === 'application:accepted') {
      redirectToChat(entityId, currentUser!._id);
    }
  };

  return (
    <Wrapper color={mode} onClick={() => redirect()}>
      <img src={`${s3Url}/${notification.userFrom.imgUrl}`} alt='n' />
      <Content color={mode}>
        <span>{`${userFrom.firstName} ${userFrom.lastName}`}</span>
        <span>{notificationTypes[notificationType].title}</span>
      </Content>
      <DeleteNotification id={_id} />
    </Wrapper>
  );
};
