import React from 'react';

export const PostJobDetails = ({ setStep }: { setStep: Function }) => {
  const next = () => setStep(1);

  return (
    <div className='post-job__step' id='details'>
      <h1 style={{ color: 'white' }}>Details</h1>
      <button onClick={next}>Next</button>
    </div>
  );
};
