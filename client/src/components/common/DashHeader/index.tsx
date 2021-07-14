import { useTypedSelector } from 'hooks/use-typed-selector';
import { FC } from 'react';

interface IProps {
  title: string;
}

export const DashHeader: FC<IProps> = ({ title }) => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);

  return (
    <div className={`dash-header ${mode}`}>
      <h2>{title}</h2>
    </div>
  );
};
