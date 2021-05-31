import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  item: {
    label: string;
    required?: boolean;
    options: string[];
  };
}
export const DashSelectInput: FC<IProps> = ({ item }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);
  const className = `dash-select-input ${mode === 'dark' ? 'darkmode' : ''}`;

  return (
    <div className={className}>
      <label>
        {item.label}
        {item.required && <span style={{ color: theme }}>*</span>}
      </label>
      <select style={{ fontSize: '14px' }}>
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
