import { DashHeader } from 'components/common/DashHeader';
import { NotificationItem } from 'components/notifications/NotificationItem';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { INotification } from 'interfaces';
import React from 'react';

export const Notifications = () => {
  const { fetchNotifications, markAsRead } = useActions();
  const { items } = useTypedSelector((state) => state.notifications);

  const list = items.map((item: INotification) => (
    <NotificationItem notification={item} key={item._id} />
  ));

  const unreadNotifications = items.filter((item) => item.opened === false);
  React.useEffect(() => {
    fetchNotifications();
    if (unreadNotifications.length) markAsRead();
  }, [fetchNotifications]);

  return (
    <div className='notifications-screen'>
      <DashHeader title='Notifications' />
      <div className='notifications-screen__main'>{list}</div>
    </div>
  );
};
