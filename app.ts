import cors from 'cors';
import 'colors';
import { NotFoundError, errorHandler } from './common';
import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import { authRouter } from './routes/auth';
import { chatsRouter } from './routes/chats';
import { messagesRouter } from './routes/messages';
import { profileRouter } from './routes/profiles';
import { uploadRouter } from './routes/uploads';
import { jobsRouter } from './routes/jobs';
import { applicationsRouter } from './routes/applications';
import { notificationsRouter } from './routes/notifications';

const app = express();
app.use(express.json());
app.use(cors());

app.use(cookieSession({ signed: false, secure: false }));

app.use('/api/applications', applicationsRouter);
app.use('/api/auth', authRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/profiles', profileRouter);
app.use('/api/uploads', uploadRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
