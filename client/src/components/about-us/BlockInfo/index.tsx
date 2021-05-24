import { useTypedSelector } from 'hooks/use-typed-selector';

export const BlockInfo = () => {
  const { data } = useTypedSelector((state) => state.modal);
  return (
    <div className='block-info'>
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
    </div>
  );
};
