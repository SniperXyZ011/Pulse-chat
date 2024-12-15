import Message from '../models/Message.js';

export const addMessage = async (chatId, message) => {
    const { content, sender } = message;

    try {
        const newMessage = new Message({
            chatId,
            message: content, // Store the content of the message
            sender, // Store the sender's information (could be user ID)
        });

        await newMessage.save(); // Save message to the database
        console.log(`Message saved to DB for chat: ${chatId}`);

        return newMessage; // Return the saved message (optional)
    } catch (error) {
        console.error('Error saving message to DB:', error);
        throw new Error('Error saving message');
    }
};


export const sendMessage = async (req, res) => {
    const { chatId, message, senderId } = req.body;

    try{
        const newMessage = new Message({
            chatId,
            message,
            sender: senderId,
        });

        await newMessage.save();
        res.status(201).json(newMessage);
    }catch(err){
        res.status(500).json({message: 'Error sending message',err});
    }
};

export const getMessages = async (req, res) => {
    const { chatId } = req.params;

    try{
        const messages = await Message.find({ chatId });
        res.status(200).json(messages);
    }catch(err){
        res.status(500).json({message: 'Error fetching messages',err});
    }
};