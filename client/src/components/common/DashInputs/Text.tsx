import { FC } from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IDashTextInput } from 'interfaces/inputs';
import { IError } from 'interfaces';

interface IProps {
  item: IDashTextInput;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType?: string;
  error?: IError | null | undefined;
}

export const Text: FC<IProps> = (props) => {
  const { item, onChange, value, inputType, error } = props;
  const { mode } = useTypedSelector((state) => state.dashboard);
  const type = inputType ? inputType : 'text';

  return (
    <div>
      {error && <div className='input-error'>{error.message}</div>}
      <div className={`dash-text-input ${mode}`}>
        <label>
          {item.label}
          {item.required && <span>*</span>}
          {item.info && <small>{item.info}</small>}
        </label>
        <input type={type} name={item.name} onChange={onChange} value={value} />
      </div>
    </div>
  );
};
