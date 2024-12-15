import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/auth.js';
import chatSocketHandler from './src/sockets/chatSocket.js';
import chatRoutes from './src/routes/chat.js';
import messageRoutes from './src/routes/message.js';
// import chatSocket from './src/sockets/chat.js';a


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "*"}});

app.use('/api/auth', authRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/messages', messageRoutes);

chatSocketHandler(io);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));