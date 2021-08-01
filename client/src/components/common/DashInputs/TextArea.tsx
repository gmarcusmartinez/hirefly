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
  const { mode } = useTypedSelector((state) => state.dashboard);

  return (
    <div className={`dash-text-area-input ${mode}`}>
      <label>
        {item.label}
        {item.required && <span>*</span>}
      </label>
      <textarea name={item.name} onChange={onChange} value={value} />
    </div>
  );
};
