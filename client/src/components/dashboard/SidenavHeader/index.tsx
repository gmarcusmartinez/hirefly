import React from 'react';

interface IProps {
  expand: boolean;
  setExpand: Function;
}
export const SidenavHeader: React.FC<IProps> = ({ expand, setExpand }) => {
  const className = `material-icons ${expand ? 'rotate' : ''}`;
  return (
    <div className='sidenav__header'>
      <div className='sidenav__header__profile-img'></div>
      <span className='sidenav__header__name'>Marcus</span>
      <i className={className} onClick={() => setExpand(!expand)}>
        chevron_right
      </i>
    </div>
  );
};
