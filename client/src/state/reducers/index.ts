import { combineReducers } from 'redux';
import { auth } from './auth';
import { chats } from './chats';
import { profiles } from './profiles';
import { dashboard } from './dashboard';
import { modal } from './modal';
import { nav } from './nav';
import { socket } from './socket';

export const rootReducer = combineReducers({
  auth,
  chats,
  dashboard,
  modal,
  profiles,
  nav,
  socket,
});

export type RootState = ReturnType<typeof rootReducer>;
