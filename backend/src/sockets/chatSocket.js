const chatSocketHandler = (io) => {
    io.on('connection', (socket) => {
        console.log('User connected', socket.id);

        socket.on('joinChat', (chatId) => {
            socket.join(chatId);
            console.log(`User joined with chat: ${chatId}`);
        });

        socket.on('sendMessage', (message) => {
            const { chatId, content, sender } = message;
            io.to(chatId).emit('receiveMessage', { content, sender});
        });

        socket.on('disconnect', () => {
            console.log('User disconnected: ', socket.id);
        });
    });
};


export default chatSocketHandler;