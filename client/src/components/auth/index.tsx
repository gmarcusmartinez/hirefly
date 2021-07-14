import { useTypedSelector } from 'hooks/use-typed-selector';
import { useState } from 'react';
import { Signin } from './Signin';
import { Signup } from './Signup';
import { ErrorsContainer } from 'components/common/ErrorsContainer';

export const AuthForm = () => {
  const [formDisplay, setFormDisplay] = useState('RENDER_SIGNIN');
  const { errors } = useTypedSelector(({ auth }) => auth);

  const renderContent = () => {
    switch (formDisplay) {
      case 'RENDER_SIGNIN':
        return <Signin setFormDisplay={setFormDisplay} />;
      case 'RENDER_SIGNUP':
        return <Signup setFormDisplay={setFormDisplay} />;
    }
  };

  return (
    <div className='auth-form-wrapper'>
      <ErrorsContainer errors={errors} />
      {renderContent()}
    </div>
  );
};
