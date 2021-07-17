import { INotification } from 'interfaces';
import { FC } from 'react';

interface IProps {
  notification: INotification;
}
export const NotificationItem: FC<IProps> = ({ notification }) => {
  return <div className='notification-item'></div>;
};
