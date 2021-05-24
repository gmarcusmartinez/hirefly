import { IUser } from 'interfaces';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface IProps extends RouteProps {
  currentUser: IUser | null;
}

export const Protected: React.FC<IProps> = (props) => {
  let redirectPath = '';
  if (!props.currentUser) redirectPath = '/';

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};
