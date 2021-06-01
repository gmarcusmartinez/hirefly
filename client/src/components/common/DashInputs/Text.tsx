import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  item: {
    label: string;
    required?: boolean;
    name: string;
  };
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const DashTextInput: FC<IProps> = ({ item, onChange, value }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);

  return (
    <div className={`dash-text-input ${mode}`}>
      <label>
        {item.label}
        {item.required && <span style={{ color: theme }}>*</span>}
      </label>
      <input type={'text'} name={item.name} onChange={onChange} value={value} />
    </div>
  );
};
