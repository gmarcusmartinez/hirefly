import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import React from 'react';

interface IProps {
  b: {
    img: string;
    title: string;
  };
}

export const Block: React.FC<IProps> = ({ b }) => {
  const { toggleModal } = useActions();
  const { isOpen } = useTypedSelector((state) => state.nav);

  const data = b;
  const handleClick = () => toggleModal(true, 'BLOCK_INFO', data);
  const className = `about-us__block ${isOpen ? 'z' : ''}`;
  return (
    <div className={className} onClick={handleClick}>
      <h3>{b.title}</h3>
      <img src={b.img} alt='blank' />
    </div>
  );
};
