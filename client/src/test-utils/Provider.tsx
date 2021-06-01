import { Provider } from 'react-redux';

//@ts-ignore
export const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
