import { Badge } from './styles';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const NotificationsBadge = () => {
  const { items } = useTypedSelector((state) => state.notifications);

  const unreadNotifications = items.filter((item) => item.opened === false);
  if (unreadNotifications.length === 0) return null;
  return (
    <Badge>
      <span>{unreadNotifications.length}</span>
    </Badge>
  );
};
