import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

export const MenuBars = () => {
  const { toggleNav } = useActions();
  const { isOpen } = useTypedSelector((state) => state.nav);

  const bar = `bar ${isOpen ? 'change' : ''}`;
  const bars = [...Array(3)].map((_, i) => <div key={i} className={bar} />);

  return (
    <div className='menu-bars' onClick={() => toggleNav(!isOpen)}>
      {bars}
    </div>
  );
};
