import React from 'react';
import { useHistory } from 'react-router';
import { AuthForm } from 'components/auth';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { images } from './images';

export const Auth = () => {
  const { currentUser } = useTypedSelector(({ auth }) => auth);

  const flag = images.map((src, i) => (
    <div key={i}>
      <img src={src} alt='building' />
    </div>
  ));

  const history = useHistory();

  React.useEffect(() => {
    if (currentUser) history.push('/chat');
  }, [currentUser, history]);

  return (
    <div className='auth-screen'>
      <div className='auth-screen__image-wrapper'>{flag}</div>
      <AuthForm />
    </div>
  );
};
