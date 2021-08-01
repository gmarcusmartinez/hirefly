import { useTypedSelector } from 'hooks/use-typed-selector';
import { IError } from 'interfaces';
import { FC } from 'react';

interface IProps {
  error?: IError | null | undefined;
  info?: string;
  required: boolean;
  type: string;
  label: string;
  name: string;
  value: string;
  testId?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Text: FC<IProps> = (props) => {
  const { mode } = useTypedSelector((state) => state.dashboard);
  const { error, info, required, type } = props;
  const isRequired = required ? <span>*</span> : null;
  const small = info ? <div className='text-input__info'>{info}</div> : null;

  return (
    <div className={`text-input ${mode}`}>
      <label>
        {props.label}
        {isRequired}
      </label>
      <input
        spellCheck={false}
        type={type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        data-testid={props.testId}
      />
      {small}
      {error && <div className='input-error'>{error.message}</div>}
    </div>
  );
};
