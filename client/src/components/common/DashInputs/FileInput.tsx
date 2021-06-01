import { FC, ChangeEvent } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';

interface IProps {
  item: {
    label: string;
    required?: boolean;
    accept?: string;
  };
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const DashFileInput: FC<IProps> = ({ item, onChange }) => {
  const { theme, mode } = useTypedSelector((state) => state.dashboard);
  const className = `dash-file-input-wrapper ${mode}`;
  const color = mode === 'darkmode' ? '#fff' : '#000';

  return (
    <div className='dash-file-input'>
      <label style={{ color }}>
        {item.label}
        {item.required && <span style={{ color: theme }}>* </span>}
      </label>
      <div className={className} style={{ borderColor: theme }}>
        <input type='file' accept={item.accept} onChange={onChange} />
      </div>
    </div>
  );
};
