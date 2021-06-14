import { combineReducers } from 'redux';
import { auth } from './auth';
import { chats } from './chats';
import { messages } from './messages';
import { profiles } from './profiles';
import { dashboard } from './dashboard';
import { modal } from './modal';
import { nav } from './nav';

export const rootReducer = combineReducers({
  auth,
  chats,
  dashboard,
  messages,
  modal,
  profiles,
  nav,
});

export type RootState = ReturnType<typeof rootReducer>;
