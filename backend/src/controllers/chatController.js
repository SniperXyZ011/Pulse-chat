import Chat from '../models/Chat.js';
import User from '../models/User.js';


export const createChat = async (req, res) => {
    const { userId, chatName, users } = req.body;

    try{
        const chat = new Chat({
            chatName,
            users: [userId, ...users],
        });

        await chat.save();
        res.status(201).json(chat);
    }catch(err){
        res.status(500).json({message: 'Error creating chat', err})
    }
};


export const getChats = async (req, res) => {
    const { userId } = req.query;

    try{
        const chats = await Chat.find({users: userId});
        res.status(200).json(chats);
    }catch(err){
        res.status(500).json({message: 'Error fetching chat', err})
    }
};