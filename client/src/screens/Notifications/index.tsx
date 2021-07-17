import { DashHeader } from 'components/common/DashHeader';
import { NotificationItem } from 'components/notifications/NotificationItem';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { INotification } from 'interfaces';
import React from 'react';

export const Noitifications = () => {
  const { fetchNotifications } = useActions();
  const { items } = useTypedSelector((state) => state.notifications);

  const list = items.map((item: INotification) => (
    <NotificationItem notification={item} key={item._id} />
  ));

  React.useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <div className='notifications-screen'>
      <DashHeader title='Notifications' />
      <div className='notifications-screen__main'>{list}</div>
    </div>
  );
};
