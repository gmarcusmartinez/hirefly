import { useActions } from 'hooks/use-actions';
import { FC } from 'react';
import { useHistory } from 'react-router';

interface IProps {
  to: string;
  dir?: string;
  mobile?: boolean;
}

export const NavLink: FC<IProps> = ({ to, dir, mobile }) => {
  const { toggleNav } = useActions();
  const history = useHistory();

  const redirect = () => {
    history.push(to);
    if (mobile) toggleNav(false);
  };

  return (
    <div className={`navigation__link ${dir}`} onClick={redirect}>
      {to.replace('-', ' ')}
    </div>
  );
};
