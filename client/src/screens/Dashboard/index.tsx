import { SidenavHeader } from 'components/dashboard/SidenavHeader';
import React from 'react';

export const Dashboard = () => {
  const [expand, setExpand] = React.useState(false);

  return (
    <div className='dashboard'>
      <div className={`dashboard__panel ${expand ? 'expand' : 'retract'}`}>
        <div className='sidenav'>
          <SidenavHeader expand={expand} setExpand={setExpand} />
        </div>
        <div className='dashboard__main'></div>
      </div>
    </div>
  );
};
