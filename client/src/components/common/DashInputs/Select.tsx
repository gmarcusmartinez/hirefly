import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  item: {
    label: string;
    required?: boolean;
    options: string[];
    name: string;
  };
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const DashSelectInput: FC<IProps> = ({ item, onChange }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);

  const opts = item.options.map((o, i) => (
    <option key={i} value={o}>
      {o}
    </option>
  ));

  return (
    <div className={`dash-select-input ${mode}`}>
      <label>
        {item.label}
        {item.required && <span style={{ color: theme }}>*</span>}
      </label>
      <select onChange={onChange} name={item.name}>
        {opts}
      </select>
      <i className='material-icons' style={{ color: theme }}>
        keyboard_arrow_down
      </i>
    </div>
  );
};
