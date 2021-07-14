import { IError } from 'interfaces';
import { FC } from 'react';

interface IProps {
  e: IError;
}
export const ErrorItem: FC<IProps> = ({ e }) => {
  return (
    <div className='error-item'>
      <span>{e.message}</span>
    </div>
  );
};
