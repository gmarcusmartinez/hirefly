import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IDashSelectInput } from 'interfaces/inputs';

interface IProps {
  item: IDashSelectInput;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const Select: FC<IProps> = ({ item, onChange, value }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);
  return (
    <div className={`dash-select-input ${mode}`}>
      <label>
        {item.label}
        {item.required && <span style={{ color: theme }}>*</span>}
      </label>

      <select onChange={onChange} name={item.name} value={value}>
        {item.options.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
      </select>

      <i className='material-icons' style={{ color: theme }}>
        keyboard_arrow_down
      </i>
    </div>
  );
};
