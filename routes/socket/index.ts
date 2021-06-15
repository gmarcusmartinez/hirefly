import { app } from '../../app';
import { createServer } from 'http';
import { Socket } from 'socket.io';

// import { User } from '../../models/User';
// import { Chat } from '../../models/Chat';
// import { Socket } from 'socket.io';

interface IInitResponse {
  user: { _id: string };
}
interface IJoinRoomResponse {
  chat: string;
}

// // const sockets: any = {};

export const server = createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:3000' },
});

io.on('connection', (socket: Socket) => {
  socket.on('init', ({ user }: IInitResponse) => {
    socket.join(user._id);
    socket.emit('connected');
  });

  socket.on('join room', ({ chat }: IJoinRoomResponse) => {
    socket.join(chat);
  });

  socket.on('typing', ({ chat }: IJoinRoomResponse) => {
    socket.in(chat).emit('typing');
  });
});
