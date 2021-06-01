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
  const style = { borderColor: color };

  return (
    <div className='file-input'>
      <div className={`file-input-wrapper ${mode}`} style={style}>
        <i className='material-icons' style={{ color }}>
          {item.icon}
        </i>
        <input type='file' accept={item.accept} onChange={onChange} />
      </div>
      {item.required && <span style={{ color: theme }}>* </span>}
      <label className={mode}>{file ? '' : item.label}</label>
    </div>
  );
};
