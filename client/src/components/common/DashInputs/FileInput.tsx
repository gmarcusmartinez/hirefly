import { FC, ChangeEvent } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IDashFileInput } from 'interfaces/inputs';

interface IProps {
  item: IDashFileInput;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
}
export const FileInput: FC<IProps> = ({ item, onChange, file }) => {
  const { theme, mode } = useTypedSelector(({ dashboard }) => dashboard);
  const color = file ? theme : '';

  return (
    <div className='file-input'>
      <div
        className={`dash-file-input-wrapper ${mode}`}
        style={{ borderColor: color }}
      >
        <i className='material-icons' style={{ color }}>
          {item.icon}
        </i>
        <input type='file' accept={item.accept} onChange={onChange} />
      </div>
      <label className={mode}>{item.label}</label>
      {item.required && (
        <span style={{ color: theme, fontSize: '16px' }}>* </span>
      )}
    </div>
  );
};
