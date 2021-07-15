import { combineReducers } from 'redux';
import { applications } from './applications';
import { auth } from './auth';
import { chats } from './chats';
import { profiles } from './profiles';
import { dashboard } from './dashboard';
import { modal } from './modal';
import { nav } from './nav';
import { socket } from './socket';
import { jobs } from './jobs';

export const rootReducer = combineReducers({
  applications,
  auth,
  chats,
  dashboard,
  modal,
  profiles,
  jobs,
  nav,
  socket,
});

export type RootState = ReturnType<typeof rootReducer>;
