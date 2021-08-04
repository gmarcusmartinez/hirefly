import { useTypedSelector } from 'hooks/use-typed-selector';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface IProps extends RouteProps {}

export const ApplicantRoute: React.FC<IProps> = (props) => {
  const { currentUser } = useTypedSelector(({ auth }) => auth);

  let redirectPath = '';
  if (currentUser!.accountType !== 'applicant') redirectPath = '/';

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};
