import { FC, ChangeEvent } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IDashFileInput } from 'interfaces/inputs';

interface IProps {
  item: IDashFileInput;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
}
export const FileInput: FC<IProps> = ({ item, onChange, file }) => {
  const { mode } = useTypedSelector(({ dashboard }) => dashboard);
  const color = file ? '#838dec' : '';
  const style = { borderColor: color };

  return (
    <div className='file-input'>
      <div className={`file-input-wrapper ${mode}`} style={style}>
        <i className='material-icons' style={{ color }}>
          {item.icon}
        </i>
        <input type='file' accept={item.accept} onChange={onChange} />
        {item.required && <span>* Required</span>}
      </div>
      <label className={mode}>{file ? '' : item.label}</label>
    </div>
  );
};
