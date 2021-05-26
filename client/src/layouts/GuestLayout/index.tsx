import React from 'react';
import { Footer } from 'components/navigation/Footer';
import { Navigation } from 'components/navigation';

export const GuestLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className='main-content'>{children}</div>
      <Footer />
    </>
  );
};
