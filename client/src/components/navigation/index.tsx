import { useTypedSelector } from 'hooks/use-typed-selector';
import { MenuBars } from './MenuBars';
import { NavLink } from './NavLink';
import { guestLinks, recruiterLinks, applicantLinks } from './links';

export const Navigation = () => {
  const { isOpen } = useTypedSelector((state) => state.nav);
  const { currentUser } = useTypedSelector((state) => state.auth);

  let navLinks = guestLinks;
  if (currentUser?.accountType === 'applicant') navLinks = applicantLinks;
  else if (currentUser?.accountType === 'recruiter') navLinks = recruiterLinks;

  const mobileLinks = navLinks.map(({ to }, i) => {
    const dir = isOpen ? `slide-in-${i}` : `slide-out-${i}`;
    return <NavLink key={i} to={to} dir={dir} mobile={true} />;
  });
  const desktopLinks = navLinks.map(({ to }, i) => <NavLink key={i} to={to} />);
  const c = `navigation__links ${currentUser ? 'auth-layout' : 'guest-layout'}`;

  return (
    <div className={`navigation`}>
      <MenuBars />
      {isOpen && <div className={c}>{mobileLinks}</div>}
      <div className='desktop-links'>{desktopLinks}</div>
    </div>
  );
};
