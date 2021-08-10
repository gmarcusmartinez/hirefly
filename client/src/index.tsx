import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import history from './core/history';

import './styles/main.scss';
import { GlobalStyles, theme } from 'style';
import { ThemeProvider } from 'styled-components';
import App from './app/App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
