export const PostJobPayment = ({ setStep }: { setStep: Function }) => {
  const prev = () => setStep(0);

  return (
    <div className='post-job__step' id='payment'>
      <h1 style={{ color: 'white' }}>Payment</h1>
      <button onClick={prev}>Back</button>
    </div>
  );
};
