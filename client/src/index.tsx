import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './core/history';
import { Provider } from 'react-redux';
import { store } from './state';

import './styles/main.scss';
import App from './app/App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
