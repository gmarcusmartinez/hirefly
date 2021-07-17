import { FC } from 'react';
import { s3Url } from 'api/s3url';
import { INotification } from 'interfaces';
import { notificationTypes } from './notification-types';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  notification: INotification;
}
export const NotificationItem: FC<IProps> = ({ notification }) => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  const { userFrom, notificationType } = notification;
  const name = `${userFrom.firstName} ${userFrom.lastName}`;

  return (
    <div className={`notification-item ${mode}`}>
      <img src={`${s3Url}/${notification.userFrom.imgUrl}`} />
      <div className='notification-item__content'>
        <span>{name} </span>
        <span>{notificationTypes[notificationType]}</span>
      </div>
      <div className='notification-item__trash'></div>
    </div>
  );
};
