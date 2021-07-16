import { FC } from 'react';

interface IProps {
  alert: {
    type: string;
    message: string;
    redirect?: string;
  };
}

export const AlertItem: FC<IProps> = ({ alert }) => {
  const className = `alert-item ${alert.type}`;
  return (
    <div className={className}>
      <span>{alert.message}</span>
    </div>
  );
};
