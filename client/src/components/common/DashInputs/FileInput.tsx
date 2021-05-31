import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  item: {
    label: string;
    required?: boolean;
  };
}
export const DashFileInput: FC<IProps> = ({ item }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);
  const className = `dash-file-input-wrapper ${
    mode === 'dark' ? 'darkmode' : ''
  }`;
  const color = mode === 'dark' ? '#fff' : '#000';

  return (
    <div className='dash-file-input'>
      <label style={{ color }}>
        {item.label}
        {item.required && <span style={{ color: theme }}>*</span>}
      </label>
      <div className={className}>
        <input type='file' />
      </div>
    </div>
  );
};
