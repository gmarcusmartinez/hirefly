import React from 'react';
import { Switch, Route } from 'react-router';
import * as screens from '../screens';
import Modal from 'components/modal';
import { Protected } from 'components/common/ProtectedRoute';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';

function App() {
  const { getCurrentUser } = useActions();
  const { displayModal } = useTypedSelector((state) => state.modal);
  const { currentUser } = useTypedSelector((state) => state.auth);

  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <>
      <Switch>
        <Route exact path='/' component={screens.Auth} />
        <Route path='/about' component={screens.AboutUs} />
        <Protected
          path='/dashboard'
          component={screens.Dashboard}
          currentUser={currentUser}
        />
        <Protected
          path='/signout'
          component={screens.Signout}
          currentUser={currentUser}
        />
      </Switch>
      {displayModal && <Modal />}
    </>
  );
}

export default App;
