import { combineReducers } from 'redux';
import { auth } from './auth';
import { dashboard } from './dashboard';
import { modal } from './modal';
import { nav } from './nav';

export const rootReducer = combineReducers({
  auth,
  dashboard,
  modal,
  nav,
});

export type RootState = ReturnType<typeof rootReducer>;
