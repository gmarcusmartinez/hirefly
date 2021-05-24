import React from 'react';
import { Footer } from 'components/navigation/Footer';
import { Navigation } from '../components/navigation';
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
      <Navigation />
      <div className='main-content'>
        <Switch>
          <Route exact path='/' component={screens.Landing} />
          <Route path='/about' component={screens.AboutUs} />
          <Route path='/signin' component={screens.Auth} />
          <Protected
            path='/chat'
            component={screens.Chat}
            currentUser={currentUser}
          />
        </Switch>
      </div>
      <Footer />
      {displayModal && <Modal />}
    </>
  );
}

export default App;
