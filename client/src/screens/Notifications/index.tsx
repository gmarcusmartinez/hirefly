import React from 'react';
import { INotification } from 'interfaces';
import { useActions } from 'hooks/use-actions';
import { NotificationItem } from 'components/notifications/NotificationItem';
import { useTypedSelector } from 'hooks/use-typed-selector';

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
  }, [fetchNotifications, markAsRead, unreadNotifications.length]);

  return <div className='notifications'>{list}</div>;
};
