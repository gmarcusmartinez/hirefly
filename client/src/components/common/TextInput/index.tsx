import { FC } from 'react';

interface IProps {
  error?: { message: string };
  info?: string;
  required: boolean;
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Text: FC<IProps> = (props) => {
  const { error, info, required, type } = props;
  const isRequired = required ? <span>*</span> : null;
  const small = info ? <div className='text-input__info'>{info}</div> : null;

  return (
    <div className='text-input'>
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
        autoComplete='on'
      />
      {small}
      {error && <div className='input-error'>{error.message}</div>}
    </div>
  );
};
