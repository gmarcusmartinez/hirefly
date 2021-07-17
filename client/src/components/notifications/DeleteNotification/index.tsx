import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const DeleteNotification = ({ id }: { id: string }) => {
  const { deleteNotification } = useActions();
  const { theme } = useTypedSelector((state) => state.dashboard);

  const handleDelete = (e: any) => {
    e.stopPropagation();
    deleteNotification(id);
  };

  return (
    <div className='notification-item__trash'>
      <span
        className='material-icons'
        style={{ color: theme }}
        onClick={handleDelete}
      >
        delete
      </span>
    </div>
  );
};
