import { app } from '../../app';
import { createServer } from 'http';
import { Socket } from 'socket.io';
import { MessageAttrs } from '../../models/Message';
import { Chat } from '../../models/Chat';

export const server = createServer(app);

const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:3000' },
});

io.on('connection', (socket: Socket) => {
  socket.on('init', (user_id: string) => {
    // Join User to thier own room on the socket connection
    socket.join(user_id);
    socket.emit('connected');
  });

  // Join a room specific to the chat id
  socket.on('join room', async (chat_id: string) => {
    socket.join(chat_id);
    console.log(socket.rooms);
  });

  // Emit typing event to chat partner
  socket.on('typing', (chat_id) => {
    socket.in(chat_id).emit('user typing');
  });

  // Send message back to Receiver
  socket.on('new message', async (message: MessageAttrs) => {
    const chat = await Chat.findById(message.chat);
    if (!chat) return;

    const chatUsers = chat.users.map((user) => user._id.toString());
    socket.broadcast.emit('message received', message);
    const partner = chatUsers.filter((id) => id !== message.sender);
    io.in(partner[0]).emit('message received', message);
  });

  // Disconnect Socket
  socket.on('disconnect', (user_id) => {
    console.log('socket disconnected');
    socket.leave(user_id);
  });
});
