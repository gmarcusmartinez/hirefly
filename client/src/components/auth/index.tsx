import { useState } from 'react';
import { RecruiterSignup } from './Recruiter';
import { Signin } from './Signin';
import { Signup } from './Signup';

export const AuthForm = () => {
  const [formDisplay, setFormDisplay] = useState('RENDER_SIGNIN');

  const renderContent = () => {
    switch (formDisplay) {
      case 'RENDER_SIGNIN':
        return <Signin setFormDisplay={setFormDisplay} />;
      case 'RENDER_SIGNUP':
        return <Signup setFormDisplay={setFormDisplay} />;
      case 'RENDER_SIGNUP_RECRUITER':
        return <RecruiterSignup setFormDisplay={setFormDisplay} />;
    }
  };

  return <div className='auth-form-wrapper'>{renderContent()}</div>;
};
