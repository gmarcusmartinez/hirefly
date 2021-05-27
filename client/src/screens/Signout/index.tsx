import React from 'react';
import { useActions } from 'hooks/use-actions';
import { Spinner } from 'components/common/Spinner';

export const Signout = () => {
  const { signout } = useActions();

  // React.useEffect(() => {
  //   signout();
  // }, [signout]);

  return (
    <div className='signout-screen'>
      <Spinner message='Signing out.' />
    </div>
  );
};
