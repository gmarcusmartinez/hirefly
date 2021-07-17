import { FC } from 'react';
import { s3Url } from 'api/s3url';
import { INotification } from 'interfaces';
import { notificationTypes } from './notification-types';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import { DeleteNotification } from '../DeleteNotification';

interface IProps {
  notification: INotification;
}

export const NotificationItem: FC<IProps> = ({ notification }) => {
  const { _id, userFrom, notificationType, entityId } = notification;
  const { redirectToChat } = useActions();

  const { currentUser } = useTypedSelector((state) => state.auth);
  const { mode } = useTypedSelector((state) => state.dashboard);
  const { chatItems } = useTypedSelector((state) => state.chats);

  const redirect = () => {
    if (notificationType === 'application:accepted') {
      const chat = chatItems.find(({ _id }) => _id === entityId);
      redirectToChat(entityId, chat!, currentUser!);
    }
  };

  return (
    <div className={`notification-item ${mode}`} onClick={() => redirect()}>
      <img src={`${s3Url}/${notification.userFrom.imgUrl}`} alt='n' />
      <div className='notification-item__content'>
        <span>{`${userFrom.firstName} ${userFrom.lastName}`} </span>
        <span>{notificationTypes[notificationType].title}</span>
      </div>
      <DeleteNotification id={_id} />
    </div>
  );
};
