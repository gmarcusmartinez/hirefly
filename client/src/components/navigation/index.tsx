import { useTypedSelector } from 'hooks/use-typed-selector';
import { MenuBars } from './MenuBars';
import { NavLink } from './NavLink';
import { navlinks } from './links';

export const Navigation = () => {
  const { isOpen } = useTypedSelector((state) => state.nav);
  const desktopLinks = navlinks.map(({ to }, i) => <NavLink key={i} to={to} />);

  const mobileLinks = navlinks.map(({ to }, i) => {
    const dir = isOpen ? `slide-in-${i}` : `slide-out-${i}`;
    return <NavLink key={i} to={to} dir={dir} mobile={true} />;
  });

  return (
    <div className={`navigation`}>
      <MenuBars />
      {isOpen && <div className='navigation__links'>{mobileLinks}</div>}
      <div className='desktop-links'>{desktopLinks}</div>
    </div>
  );
};
