import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IDashTextInput } from 'interfaces/inputs';

interface IProps {
  item: IDashTextInput;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType?: string;
}

export const Text: FC<IProps> = ({ item, onChange, value, inputType }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);
  const type = inputType ? inputType : 'text';

  return (
    <div className={`dash-text-input ${mode}`}>
      <label>
        {item.label}
        {item.required && <span style={{ color: theme }}>*</span>}
        {item.info && <small>{item.info}</small>}
      </label>
      <input type={type} name={item.name} onChange={onChange} value={value} />
    </div>
  );
};
