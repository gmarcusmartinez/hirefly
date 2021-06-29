import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IDashTextInput } from 'interfaces/inputs';

interface IProps {
  item: IDashTextInput;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const TextArea: FC<IProps> = ({ item, onChange, value }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);

  return (
    <div className={`dash-text-input ${mode}`}>
      <label>
        {item.label}
        {item.required && <span style={{ color: theme }}>*</span>}
      </label>
      <textarea name={item.name} onChange={onChange} value={value} />
    </div>
  );
};
