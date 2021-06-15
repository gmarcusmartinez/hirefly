import { app } from '../../app';
import { createServer } from 'http';
import { Socket } from 'socket.io';

// import { User } from '../../models/User';
// import { Chat } from '../../models/Chat';
// import { Socket } from 'socket.io';

interface IInitResponse {
  _id: string;
}

// // const sockets: any = {};

export const server = createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:3000' },
});

io.on('connection', (socket: Socket) => {
  socket.on('init', (data: IInitResponse) => {
    // socket.join(data._id);
    socket.emit('connected');
  });
});
