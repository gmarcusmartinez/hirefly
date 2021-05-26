import React from 'react';

export const Connections = () => {
  const [display, setDisplay] = React.useState(false);

  return (
    <div className={`messenger__connections ${display ? 'expand' : 'retract'}`}>
      <div className='messenger__connections__header'></div>
    </div>
  );
};
