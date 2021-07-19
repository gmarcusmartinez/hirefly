import { useTypedSelector } from 'hooks/use-typed-selector';
import React from 'react';

export const NotificationsBadge = () => {
  const { theme } = useTypedSelector((state) => state.dashboard);
  const { items } = useTypedSelector((state) => state.notifications);

  const unreadNotifications = items.filter((item) => item.opened === false);
  if (unreadNotifications.length === 0) return null;
  return (
    <div className='notifications-badge' style={{ backgroundColor: theme }}>
      <span>{unreadNotifications.length}</span>
    </div>
  );
};
