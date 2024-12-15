import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/auth.js';
import chatSocketHandler from './src/sockets/chatSocket.js';


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "*"}});

chatSocketHandler(io);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));