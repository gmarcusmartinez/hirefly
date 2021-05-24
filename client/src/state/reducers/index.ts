import { combineReducers } from 'redux';
import { auth } from './auth';
import { modal } from './modal';
import { nav } from './nav';

export const rootReducer = combineReducers({
  auth,
  modal,
  nav,
});

export type RootState = ReturnType<typeof rootReducer>;
