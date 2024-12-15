import { addMessage } from '../controllers/messageController.js';

const chatSocketHandler = (io) => {
    io.on('connection', (socket) => {
        console.log('User connected', socket.id);

        socket.on('joinChat', (chatId) => {
            socket.join(chatId);
            console.log(`User joined with chat: ${chatId}`);
        });

        socket.on('sendMessage', async (message) => {
            const { chatId, content, sender } = message;
            try{
                const newMessage = await addMessage(chatId, { content, sender });
                io.to(chatId).emit('receiveMessage', { content, sender});
                console.log(`Message sent to chat: ${chatId}: ${content}`);
            }catch(err){
                console.error('Error sending message', err);
            }
            
        });

        socket.on('disconnect', () => {
            console.log('User disconnected: ', socket.id);
        });
    });
};


export default chatSocketHandler;