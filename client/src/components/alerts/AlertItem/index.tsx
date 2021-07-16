import { FC } from 'react';

interface IProps {
  alert: {
    alertType: string;
    msg: string;
    redirect?: string;
  };
}

export const AlertItem: FC<IProps> = ({ alert }) => {
  const className = `alert-item ${alert.alertType}`;
  return (
    <div className={className}>
      <span>{alert.msg}</span>
    </div>
  );
};
