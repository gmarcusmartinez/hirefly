import { app } from '../../app';
import { createServer } from 'http';
import { Socket } from 'socket.io';
import { MessageAttrs } from '../../models/Message';
import { Chat } from '../../models/Chat';

export const server = createServer(app);

const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:3000' },
  methods: ['GET', 'POST'],
});

io.on('connection', (socket: Socket) => {
  // Join User to thier own room on the socket connection
  socket.on('init', (user_id: string) => {
    socket.join(user_id);
    socket.emit('connected');
  });

  // Send message back to Receiver
  socket.on('new message', async (message: MessageAttrs) => {
    const chat = await Chat.findById(message.chat);

    const chatUsers = chat!.users.map((user) => user._id.toString());
    const partner = chatUsers.filter((id) => id !== message.sender)[0];
    io.to(partner).emit('message received', message);
  });

  // Send User Alert for Application Accepted
  socket.on('application accepted', (applicant) => {
    const msg = 'New Application Accepted!';
    io.to(applicant).emit('notification received', msg);
  });

  // Disconnect Socket
  socket.on('disconnect', (user_id) => {
    socket.leave(user_id);
  });
});
