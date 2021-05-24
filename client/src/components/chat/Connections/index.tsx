import React from 'react';

export const Connections = () => {
  const [display, setDisplay] = React.useState(false);

  return (
    <div className={`messenger__connections ${display ? 'expand' : 'retract'}`}>
      <div className='messenger__connections__header'>
        <div
          className='messenger__connections__toggle'
          onClick={() => setDisplay(!display)}
        >
          <i className={`material-icons ${display ? 'rotate' : ''}`}>
            chevron_right
          </i>
        </div>
        <div className='messenger__connections__profile-img'></div>
        <span className='messenger__connections__name'>Marcus</span>
      </div>
    </div>
  );
};
