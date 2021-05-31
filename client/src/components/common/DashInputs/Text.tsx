import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  item: {
    label: string;
    required?: boolean;
  };
}
export const DashTextInput: FC<IProps> = ({ item }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);
  const className = `dash-text-input ${mode === 'dark' ? 'darkmode' : ''}`;

  return (
    <div className={className}>
      <label>
        {item.label}
        {item.required && <span style={{ color: theme }}>*</span>}
      </label>
      <input type={'text'} />
    </div>
  );
};
