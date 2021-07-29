import { useActions } from 'hooks/use-actions';

export const DeleteNotification = ({ id }: { id: string }) => {
  const { deleteNotification } = useActions();

  const handleDelete = (e: any) => {
    e.stopPropagation();
    deleteNotification(id);
  };

  return (
    <div className='notification-item__trash'>
      <span
        className='material-icons'
        style={{ color: '#838dec' }}
        onClick={handleDelete}
      >
        delete
      </span>
    </div>
  );
};
