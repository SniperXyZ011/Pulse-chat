import express from 'express';
import { createChat, getChats } from '../controllers/chatController.js';

const router = express.Router();

router.get('/', getChats);

router.post('/', createChat);

export default router;