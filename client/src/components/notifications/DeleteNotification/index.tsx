import { useActions } from 'hooks/use-actions';
import { Wrapper } from './styles';

export const DeleteNotification = ({ id }: { id: string }) => {
  const { deleteNotification } = useActions();

  const handleDelete = (e: any) => {
    e.stopPropagation();
    deleteNotification(id);
  };

  return (
    <Wrapper>
      <span className='material-icons' onClick={handleDelete}>
        delete
      </span>
    </Wrapper>
  );
};
